var sumScore = 0;
var score1 = 0;
var score2 = 0;

document.getElementById("result3").textContent =
  "คุณตอบถูก " + sumScore + " ข้อ";
result3.style.color = "red";

function checkAnswer(answer) {
  const result = document.getElementById("result");
  if (answer === "a") {
    result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
    result.style.color = "green";
    score1 = 1;
  } else {
    result.textContent = "Incorrect! Try again.";
    result.style.color = "red";
    score1 = 0;
  }
  sumScore = score1 + score2;
  if (sumScore === 2) {
    document.getElementById("result3").textContent =
      "ตอบถูก 2 ข้อคุณผ่านแล้วครับ";
    result3.style.color = "green";
  } else {
    document.getElementById("result3").textContent =
      "คุณตอบถูก " + sumScore + " ข้อ";
    result3.style.color = "red";
  }
}

function checkAnswer2(answer) {
  const result = document.getElementById("result2");
  if (answer === "g") {
    result2.textContent =
      "ถูกต้อง หน่วยงาน Core Network ดูแลเครือข่ายส่วนกลางของบริษัท";
    result2.style.color = "green";
    score2 = 1;
  } else {
    result2.textContent = "Incorrect! Try again.";
    result2.style.color = "red";
    score2 = 0;
  }
  sumScore = score1 + score2;
  if (sumScore === 2) {
    document.getElementById("result3").textContent =
      "ตอบถูก 2 ข้อคุณผ่านแล้วครับ";
    result3.style.color = "green";
  } else {
    document.getElementById("result3").textContent =
      "คุณตอบถูก " + sumScore + " ข้อ";
    result3.style.color = "red";
  }
}
