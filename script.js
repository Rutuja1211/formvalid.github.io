document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    // Name Validation
    let name = document.getElementById("fullName").value.trim();
    if (name.length < 5) {
        document.getElementById("nameError").textContent = "Name must be at least 5 characters.";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email Validation
    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email (must contain '@').";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Phone Number Validation
    let phone = document.getElementById("phone").value.trim();
    let phoneRegex = /^[0-9]{10}$/;
    if (phone === "123456789" || !phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // Password Validation
    let password = document.getElementById("password").value.trim();
    if (
        password.toLowerCase() === "password" || 
        password === name || 
        password.length < 8
    ) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters and not be 'password' or your name.";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Confirm Password Validation
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    } else {
        document.getElementById("confirmPasswordError").textContent = "";
    }

    // If all validations pass
    if (isValid) {
        alert("Form submitted successfully!");
        this.reset();
    }
});
