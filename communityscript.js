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

  // ===== Chat helpers =====
  const chatListView = document.getElementById("chatListView");
  const chatView = document.getElementById("chatView");
  const chatList = document.getElementById("chatListItems");
  const chatHeader = document.getElementById("chatHeader");
  const chatMessages = document.getElementById("chatMessages");
  const messageInput = document.getElementById("messageInput");
  const sendMessageBtn = document.getElementById("sendMessageBtn");
  const backToList = document.getElementById("backToList");
  const newMessageBtn = document.getElementById("newMessageBtn");

  async function loadChats() {
    const { data: chatsData, error } = await supabase
  .from('chats')
  .select(`
    id,
    name,
    is_private,
    messages(
      id,
      sender_id,
      content,
      created_at
    )
  `).order("id", { ascending: true });

if (error) {
  console.error(error);
  return [];
}

return chatsData;
  }

  // ===== Render Chat List =====
async function renderChatList() {
  const chats = await loadChats();
  chatList.innerHTML = "";

  if (!chats.length) {
    const li = document.createElement("li");
    li.textContent = "No chats yet. Start one!";
    chatList.appendChild(li);
    return;
  }

  chats.forEach(chat => {
    const lastMessage = chat.messages?.slice(-1)[0];
    const lastContent = lastMessage ? lastMessage.content : "(no messages yet)";

    const li = document.createElement("li");
    li.classList.add("chat-item");

    // left side (name + last msg)
    const left = document.createElement("div");
    left.innerHTML = `
      <div class="chat-name">${chat.name}</div>
      <div class="chat-last">${lastContent}</div>
    `;

    // right side (optional unread indicator later)
    const right = document.createElement("div");

    li.appendChild(left);
    li.appendChild(right);

    li.onclick = () => openChat(chat.id, chat.name);
    chatList.appendChild(li);
  });
}

  async function openChat(chatId, chatName) {
    activeChatId = chatId;
    chatHeader.textContent = chatName;

    chatListView.style.display = "none";
    chatView.style.display = "flex";
    chatView.style.flexDirection = "column";

    await loadMessages(chatId);
    subscribeToMessages(chatId);
  }

  async function loadMessages(chatId) {
    const { data: messagesData, error } = await supabase
      .from('messages')
      .select('*')
      .eq('chat_id', chatId)
      .order('created_at', { ascending: true });

    if (error) console.error(error);

    chatMessages.innerHTML = "";
    messagesData.forEach(msg => {
      const div = document.createElement("div");
      div.classList.add("chat-message");
      div.textContent = msg.sender_id === currentUser.id ? "You: " + msg.content : msg.content;
      chatMessages.appendChild(div);
    });

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  sendMessageBtn.onclick = async () => {
    const content = messageInput.value.trim();
    if (!content || !activeChatId) return;

    const { error } = await supabase
      .from('messages')
      .insert([{ chat_id: activeChatId, sender_id: currentUser.id, content }]);

    if (error) console.error(error);
    messageInput.value = "";
  };

  backToList.onclick = () => {
    chatView.style.display = "none";
    chatListView.style.display = "block";
    renderChatList();

    if (subscription) supabase.removeChannel(subscription);
  };

  function subscribeToMessages(chatId) {
    if (subscription) supabase.removeChannel(subscription);

    subscription = supabase
      .channel(`chat:${chatId}`)
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages', filter: `chat_id=eq.${chatId}` },
        payload => {
          const msg = payload.new;
          const div = document.createElement("div");
          div.classList.add("chat-message");
          div.textContent = msg.sender_id === currentUser.id ? "You: " + msg.content : msg.content;
          chatMessages.appendChild(div);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }
      )
      .subscribe();
  }

  newMessageBtn.onclick = async () => {
    const name = prompt("Enter name of user or group chat:");
    if (!name) return;

    const { data: chat, error } = await supabase
      .from('chats')
      .insert([{ name, is_private: true }])
      .select().single();

    if (error) return console.error(error);

    await renderChatList();
  };

  async function showMessagesTab() {
    chatListView.style.display = "block";
    chatView.style.display = "none";
    await renderChatList();
    openTab("messages");
  }

  function startChatWith(userId, username) {
    alert(`Start chat with ${username}`);
  }

  // Initialize the community tab on load
  await initCommunity();

  // Default view
  openTab("homeSection");
});
