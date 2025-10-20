


function calculateGrade() {
  let marks = document.getElementById("marks").value;
  let result = document.getElementById("result");

  if (marks === "") {
    result.textContent = "Please enter your marks first!";
    result.style.color = "red";
    return;
  }

  marks = Number(marks);

  if (marks >= 90) {
    result.textContent = "Grade: A+ 🎉 Excellent!";
    result.style.color = "green";
  } else if (marks >= 80) {
    result.textContent = "Grade: A 😊 Great job!";
    result.style.color = "blue";
  } else if (marks >= 70) {
    result.textContent = "Grade: B 👍 Keep it up!";
    result.style.color = "orange";
  } else if (marks >= 60) {
    result.textContent = "Grade: C 💪 You can do better!";
    result.style.color = "purple";
  } else {
    result.textContent = "Grade: F 😢 Try again next time!";
    result.style.color = "red";
  }
}