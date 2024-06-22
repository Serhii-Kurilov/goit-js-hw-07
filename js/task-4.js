const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", formСheck);

function formСheck(event) {
    event.preventDefault();
    const form = event.target.elements;
    const formElements = {
        email: form.email.value.trim(),
        password: form.password.value.trim(),
    }

    for (let key in formElements) {
        if (formElements[key] === "") {
            alert('All form fields must be filled in');
            return;
        }
    }

    console.log(formElements);

    event.target.reset();
}