const form = document.querySelector("#signup-form");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

form.addEventListener("submit", (event) => {
    if (password.value !== confirmPassword.value) {
        event.preventDefault();

        confirmPassword.setCustomValidity("Passwords do not match");
        confirmPassword.reportValidity();
    } else {
        confirmPassword.setCustomValidity("");
    }
});

confirmPassword.addEventListener("input", () => {
    if (password.value === confirmPassword.value) {
        confirmPassword.setCustomValidity("");
    }
});