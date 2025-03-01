document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  // Reset error message
  errorMessage.textContent = "";
  
  // Retrieve stored user data
  const storedUser = localStorage.getItem(username);

  if (!storedUser) {
      errorMessage.textContent = "⚠ User not found! Please sign up first.";
      return;
  }

  const userData = JSON.parse(storedUser);

  // Validate Password
  if (password === userData.password) {
      errorMessage.style.color = "green";
      errorMessage.textContent = "✅ Login Successful! Redirecting...";
      
      setTimeout(() => {
          window.location.href = "welcome.html"; 
      }, 1500);
  } else {
      errorMessage.textContent = "❌ Incorrect password!";
  }
});

