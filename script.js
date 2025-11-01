// Only this email can log in
const savedEmail = "mugishak807@gmail.com";
const savedPassword = "12345";
const knownemail= "mugishab807@gmail.com";
const knownPassword = "12346";
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop form refresh

  // Get input values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check login info
  if((email === savedEmail && password === savedPassword ) || (email === knownemail && password === knownPassword)) {
    localStorage.setItem("loggedIn", "true"); // mark user as logged in
    window.location.href = "index.html"; // redirect to dashboard
  } else {
    document.getElementById("message").innerText = "Invalid email or password!";
  }
});
