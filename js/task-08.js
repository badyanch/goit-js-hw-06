const formRef = document.querySelector("form.login-form");

formRef.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const {
        elements: {email, password},
    } = evt.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Всі поля повинні бути заповнені!")

        return;
    }

    console.log({ email: email.value, password: password.value });

    evt.currentTarget.reset();
})

