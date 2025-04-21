function calculateAge() {
    let birthYear = document.getElementById("birthYearInput").value;
    let currentYear = 2025;
  
    if (birthYear === "") {
      document.getElementById("result").textContent = "กรุณากรอกปีเกิดก่อนนะ!";
      return;
    }
  
    let age = currentYear - birthYear;
    let result = document.getElementById("result");
  
    // ตอบกลับตามอายุ
    if (age < 13) {
      result.textContent = "คุณอายุ " + age + " ปี 👶 ยังเด็กน้อยอยู่เลย!";
      result.style.color = "#3498db";
    } else if (age < 18) {
      result.textContent = "คุณอายุ " + age + " ปี 🧒 วัยรุ่นสายซ่า!";
      result.style.color = "#f39c12";
    } else if (age < 60) {
      result.textContent = "คุณอายุ " + age + " ปี 🧑‍💼 โตแล้วนะเนี่ย!";
      result.style.color = "#2ecc71";
    } else {
      result.textContent = "คุณอายุ " + age + " ปี 👴 อายุเยอะแล้ว ดูแลสุขภาพด้วยนะ!";
      result.style.color = "#e74c3c";
    }
  }
  