// form validation for contact.html
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();

  if (!name || !email || !msg) {
    alert("Please fill in all fields.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}
