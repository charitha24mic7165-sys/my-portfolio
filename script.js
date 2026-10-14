document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("portfolioContactForm");
    const successMsg = document.getElementById("formSuccessMessage");

    contactForm.addEventListener("submit", function (event) {
        // Prevent default native page reload submit behavior
        event.preventDefault();
        event.stopPropagation();

        // Target Form Field Elements
        const nameField = document.getElementById("formName");
        const emailField = document.getElementById("formEmail");
        const subjectField = document.getElementById("formSubject");
        const messageField = document.getElementById("formMessage");

        let formIsValid = true;

        // 1. Name Input Check
        if (nameField.value.trim() === "") {
            nameField.classList.add("is-invalid");
            formIsValid = false;
        } else {
            nameField.classList.remove("is-invalid");
            nameField.classList.add("is-valid");
        }

        // 2. Email Address Structural Checking
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value.trim())) {
            emailField.classList.add("is-invalid");
            formIsValid = false;
        } else {
            emailField.classList.remove("is-invalid");
            emailField.classList.add("is-valid");
        }

        // 3. Subject Input Check
        if (subjectField.value.trim() === "") {
            subjectField.classList.add("is-invalid");
            formIsValid = false;
        } else {
            subjectField.classList.remove("is-invalid");
            subjectField.classList.add("is-valid");
        }

        // 4. Message Content Box Check
        if (messageField.value.trim() === "") {
            messageField.classList.add("is-invalid");
            formIsValid = false;
        } else {
            messageField.classList.remove("is-invalid");
            messageField.classList.add("is-valid");
        }

        // Handle completely validated logic
        if (formIsValid) {
            successMsg.classList.remove("d-none");
            
            // Reset fields cleanly
            contactForm.reset();
            
            // Remove success styling wrappers
            nameField.classList.remove("is-valid");
            emailField.classList.remove("is-valid");
            subjectField.classList.remove("is-valid");
            messageField.classList.remove("is-valid");
            
            // Auto hide success alerts after a brief window
            setTimeout(() => {
                successMsg.classList.add("d-none");
            }, 5000);
        }
    });
});
