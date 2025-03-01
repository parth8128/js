// Signup Function
document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const newUsername = document.getElementById("new-username").value.trim();
    const newPassword = document.getElementById("new-password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    const signupMessage = document.getElementById("signup-message");
  
    // Reset error message
    signupMessage.textContent = "";
  
    // Validation
    if (newUsername.length < 3) {
        signupMessage.textContent = "⚠ Username must be at least 3 characters!";
        return;
    }
  
    if (newPassword.length < 6) {
        signupMessage.textContent = "⚠ Password must be at least 6 characters!";
        return;
    }
  
    if (newPassword !== confirmPassword) {
        signupMessage.textContent = "⚠ Passwords do not match!";
        return;
    }
  
    // Store User Data
    localStorage.setItem(newUsername, JSON.stringify({ password: newPassword }));
    
    signupMessage.style.color = "green";
    signupMessage.textContent = "✅ Account created successfully! You can now login.";

    setTimeout(() => {
        window.location.href = "login.html"; 
    }, 1500);
  });
  