let currentUser;
let activeChatId = null;
let subscription = null;

// ===== Get Current User =====
async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error) console.error(error);
  currentUser = user;
}

// ===== DOMContentLoaded =====
document.addEventListener("DOMContentLoaded", async () => {
  await getCurrentUser();

  // ===== Top bar back button =====
  document.getElementById('backBtn').addEventListener('click', () => {
    window.location.href = 'mainpage.html';
  });

  // ===== Tabs =====
  function openTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = "none");
    document.getElementById(tabId).style.display = "block";
  }

  document.getElementById("communityBtn").onclick = () => openTab("homeSection");
  document.getElementById("friendsBtn").onclick = () => openTab("friends");
  document.getElementById("messagesBtn").onclick = showMessagesTab;

  // ===== Community =====
  const promptDiv = document.getElementById("communityPrompt");
  const yesBtn = document.getElementById("communityYesBtn");
  const noBtn = document.getElementById("communityNoBtn");
  const communityList = document.getElementById("communityList");

  // Check if user already joined
  async function hasJoinedCommunity() {
    const { data, error } = await supabase
      .from("community_participants")
      .select("id")
      .eq("user_id", currentUser.id)
      .maybeSingle();

    if (error) {
      console.error(error);
      return false;
    }
    return !!data;
  }

  async function joinCommunity() {
    // Prevent duplicates
    const alreadyJoined = await hasJoinedCommunity();
    if (alreadyJoined) return;

    // Get user profile
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("name")
      .eq("id", currentUser.id)
      .single();

    if (profileError) {
      console.error(profileError);
      return;
    }

    let username = profile.name;

    // Check for username conflicts
    let exists = true;
    while (exists) {
      const { data: existing, error: existError } = await supabase
        .from("community_participants")
        .select("username")
        .eq("username", username)
        .maybeSingle();

      if (existError) {
        console.error(existError);
        return;
      }

      if (existing) {
        username = prompt(`The name "${username}" is taken. Choose another:`, username);
        if (!username) return; // user canceled
      } else {
        exists = false;
      }
    }

    // Insert new row
    const { error } = await supabase.from("community_participants").insert([{
      user_id: currentUser.id,
      username
    }]);

    if (error) {
      console.error(error);
      return;
    }

    await renderCommunityMembers();
  }

  async function renderCommunityMembers() {
    const { data, error } = await supabase
      .from("community_participants")
      .select("*")
      .order("joined_at", { ascending: true });

    if (error) return console.error(error);

    communityList.innerHTML = "";
    data.forEach(member => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${member.username || "Anonymous"}</span>`;
      li.onclick = () => startChatWith(member.user_id, member.username);
      communityList.appendChild(li);
    });
  }

  // Show the join prompt only if the user hasn't joined
  async function initCommunity() {
    const joined = await hasJoinedCommunity();

    if (!joined) {
      promptDiv.style.display = "flex";

      yesBtn.onclick = async () => {
        promptDiv.style.display = "none";
        await joinCommunity();
      };

      noBtn.onclick = () => {
        window.location.href = "mainpage.html";
      };
    } else {
      promptDiv.style.display = "none";
      await renderCommunityMembers();
    }
  }

  async function showMessagesTab() {
    chatListView.style.display = "block";
    chatView.style.display = "none";
    await renderChatList();
    openTab("messages");
  }

  // Initialize the community tab on load
  await initCommunity();

  // Default view
  openTab("homeSection");
});

let activeChatUserId = null; // who you're chatting with

// DOM elements
const chatListView = document.getElementById("chatListView");
const chatView = document.getElementById("chatView");
const chatMessages = document.getElementById("chatMessages");
const messageInput = document.getElementById("messageInput");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const backToList = document.getElementById("backToList");

// ===== Start a private chat =====
async function startChatWith(userId, username) {
  activeChatUserId = userId;
  document.getElementById("chatHeader").textContent = username;
  chatListView.style.display = "none";
  chatView.style.display = "block";
  await renderMessages();
}

// ===== Render messages between current user and active chat =====
async function renderMessages() {
  if (!activeChatUserId) return;

  const { data, error } = await supabase
    .from("private_messages")
    .select("*")
    .or(`and(sender_id.eq.${currentUser.id},receiver_id.eq.${activeChatUserId}),
         and(sender_id.eq.${activeChatUserId},receiver_id.eq.${currentUser.id})`)
    .order("created_at", { ascending: true });

  if (error) return console.error(error);

  chatMessages.innerHTML = "";
  data.forEach(msg => {
    const div = document.createElement("div");
    div.textContent = msg.content;
    div.className = msg.sender_id === currentUser.id ? "my-message" : "their-message";
    chatMessages.appendChild(div);
  });

  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ===== Send message =====
sendMessageBtn.onclick = async () => {
  const text = messageInput.value.trim();
  if (!text || !activeChatUserId) return;

  // Check if receiver blocked you
  const { data: blocked } = await supabase
    .from("blocked_users")
    .select("*")
    .eq("blocker_id", activeChatUserId)
    .eq("blocked_id", currentUser.id)
    .maybeSingle();

  if (blocked) {
    alert("You cannot send a message. This user blocked you.");
    return;
  }

  const { error } = await supabase.from("private_messages").insert([{
    sender_id: currentUser.id,
    receiver_id: activeChatUserId,
    content: text
  }]);

  if (error) return console.error(error);

  messageInput.value = "";
  await renderMessages();
};

// ===== Back to chat list =====
backToList.onclick = () => {
  activeChatUserId = null;
  chatView.style.display = "none";
  chatListView.style.display = "block";
};

// ===== Render chat list (community members) =====
async function renderChatList() {
  const { data, error } = await supabase
    .from("community_participants")
    .select("user_id, username")
    .neq("user_id", currentUser.id); // exclude yourself

  if (error) return console.error(error);

  const chatListItems = document.getElementById("chatListItems");
  chatListItems.innerHTML = "";
  data.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.username;
    li.onclick = () => startChatWith(user.user_id, user.username);
    chatListItems.appendChild(li);
  });
}

// ===== Real-time updates =====
supabase
  .channel("public:private_messages")
  .on("postgres_changes", { event: "INSERT", schema: "public", table: "private_messages" }, payload => {
    const msg = payload.new;
    if (activeChatUserId && 
        (msg.sender_id === currentUser.id && msg.receiver_id === activeChatUserId) ||
        (msg.sender_id === activeChatUserId && msg.receiver_id === currentUser.id)) {
      renderMessages();
    }
  })
  .subscribe();

  async function blockUser(userId) {
  await supabase.from("blocked_users").insert([{ blocker_id: currentUser.id, blocked_id: userId }]);
  alert("User blocked!");
}