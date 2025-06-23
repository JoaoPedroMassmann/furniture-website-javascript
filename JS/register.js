document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Captura os campos
        
        const name = document.getElementById('name').value.trim();
        const password = document.getElementById('password').value.trim();
        const email = document.getElementById('email').value.trim();
        const telephone = document.getElementById('telephone').value.trim();
        const repeatPassword = document.getElementById('repeat_password').value.trim();
        const dob = document.getElementById('dob').value.trim();

        // Regex
        const passwordRegex = /^.{6,}$/;
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const telephoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
        const dobRegex = /^\d{4}-\d{2}-\d{2}$/;

        document.querySelectorAll('.error_message').forEach(e => e.remove());

        let isValid = true;

        const showError = (fieldId, message) => {
            const field = document.getElementById(fieldId);
            const error = document.createElement('div');
            error.className = 'error_message';
            error.style.color = 'red';
            error.style.marginTop = '4px';
            error.innerText = message;
            field.insertAdjacentElement('afterend', error);
        };

        if (!emailRegex.test(email)) {
            showError('email', 'Please enter a valid email.');
            isValid = false;
        }

        if (!telephoneRegex.test(telephone)) {
            showError('telephone', 'Please use the correct phone format: (99) 99999-9999.');
            isValid = false;
        }

        if (!dobRegex.test(dob)) {
            showError('dob', 'Please select a valid date of birth.');
            isValid = false;
        }

        if (!passwordRegex.test(password)) {
            showError('password', 'Password must have at least 6 characters.');
            isValid = false;
        }

        if (password !== repeatPassword) {
            showError('repeat_password', 'Passwords do not match.');
            isValid = false;
        }

        if (isValid) {
            const userData = {
                name,
                password,
                email,
                telephone
            };

            localStorage.setItem('user_registration', JSON.stringify(userData));

            alert('Form successfully submitted and saved!');
            form.reset();
        }
    });
});
