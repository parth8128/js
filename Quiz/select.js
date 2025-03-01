let loggedInUsername = "admin";

function autoFill() {
  document.getElementById("username").innerText = loggedInUsername;

  document.querySelector(".autofill-btn").style.display = "none";
}

function startQuiz(difficulty) {
  let loggedInUsername = document.getElementById("username").innerText;

  if (loggedInUsername === "Loading...") {
    alert("Please enter your username!");
    return;
  }
  if(confirm(`Starting ${difficulty} quiz for ${loggedInUsername}`))
{
  window.location.href = "index.html";
}
else
{
  alert("Select Your Qustion");
}
}
window.onload = function () {
  autoFill();
};
