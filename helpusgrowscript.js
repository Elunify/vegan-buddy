document.getElementById('backBtn').addEventListener('click', () => {
      window.location.href = 'mainpage.html'; // Or wherever you want the back button to lead
    });

function watchAd() {
    alert("Ad would play here, and you’d get XP + badges!");
  }

  function toggleMemberships() {
    const list = document.getElementById("membership-list");
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }
