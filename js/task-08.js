const form = document.querySelector(".login-form");


form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    const {
    elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        const message = "Всі поля повинні бути заповнені!!!";
        return alert(message);
    }
    
    console.log({ "email": email.value, "password": password.value });

    event.currentTarget.reset();
}