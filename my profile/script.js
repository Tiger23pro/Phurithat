function toggleTheme() {
    document.body.classList.toggle("dark");
  }
  
  function changeDescription() {
    const newBio = prompt("ใส่ bio ใหม่ของคุณ:");
    if (newBio) {
      document.getElementById("description").textContent = newBio;
    }
  }
  const quotes = [
    "จงเป็นตัวเองในเวอร์ชันที่ดีที่สุด 🌟",
    "เริ่มต้นเล็กๆ แต่ทำทุกวัน 🔁",
    "ไม่ต้องเก่งก่อน ค่อยๆ ไปก็ได้ 🚶",
    "เขียนโค้ดวันละนิด จิตแจ่มใส 💻",
    "ปัญหาคือบททดสอบ ไม่ใช่ทางตัน 🧠"
  ];
  function displayRandomQuote() {
    const quoteEl = document.getElementById("quote");
    if (quoteEl) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteEl.textContent = quotes[randomIndex];
    }
  }
  
  function copyEmail() {
    const email = document.getElementById("email").textContent;
    navigator.clipboard.writeText(email)
      .then(() => alert("คัดลอกอีเมลเรียบร้อยแล้ว! 📩"))
      .catch(() => alert("เกิดข้อผิดพลาดในการคัดลอก"));
  }

  function changeName() {
    document.getElementById("name-input-section").style.display = "block";
  }
  
  function submitNewName() {
    const newName = document.getElementById("name-input").value;
    if (newName.trim() !== "") {
      document.getElementById("name").textContent = newName;
      document.getElementById("name-input-section").style.display = "none";
      document.getElementById("name-input").value = "";
    } else {
      alert("กรุณากรอกชื่อก่อนนะ!");
    }
  }
  function addTimelineItem() {
    const ul = document.querySelector(".timeline ul");
    const newItem = document.createElement("li");
    const newText = prompt("ใส่รายการเรียนรู้ใหม่:");
    if (newText.trim() !== "") {
      newItem.textContent = `⬜️ ${newText}`;
      ul.appendChild(newItem);
    }
  }
  function removeTimeline() {
    const timeline = document.querySelector(".timeline");
    if (timeline) {
      timeline.remove();
      alert("ลบเส้นทางการเรียนเรียบร้อยแล้ว!");
    }
  }
  function highlightBio() {
    const bio = document.getElementById("bio");
    bio.style.backgroundColor = "#fffae6";
    bio.style.border = "2px dashed #ffa500";
    bio.style.padding = "10px";
    bio.style.borderRadius = "10px";
  }
  window.addEventListener("DOMContentLoaded", () => {
    displayRandomQuote();
    // ตำแหน่งเมาส์
    document.addEventListener("mousemove", function(event) {
      const x = event.clientX;
      const y = event.clientY;
      const positionDisplay = document.getElementById("mouse-position");
      if (positionDisplay) {
        positionDisplay.textContent = `ตำแหน่งเมาส์: X: ${x}, Y: ${y}`;
      }
    });
  
    // แสดงชื่อที่พิมพ์แบบสด
    document.getElementById("live-name-input").addEventListener("keyup", function(event) {
      const currentText = event.target.value;
      document.getElementById("live-name-output").textContent = currentText;
    });
  
    // เอฟเฟกต์ bio
    const bioEl = document.getElementById("bio");
if (bioEl) {
  bioEl.addEventListener("mouseover", () => {
    bioEl.style.backgroundColor = "#ffd54f";
    bioEl.style.color = "#000";
  });
  bioEl.addEventListener("mouseout", () => {
    bioEl.style.backgroundColor = "";
    bioEl.style.color = "";
  });
}});
document.getElementById("name-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      submitNewName();
    }
  });
  