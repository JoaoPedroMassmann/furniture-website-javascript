document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegex = /^.{6,}$/;

        // Limpar mensagens antigas
        document.querySelectorAll('.error_message').forEach(e => e.remove());

        let isValid = true;

        const showError = (fieldId, message) => {
            const field = document.getElementById(fieldId);
            const error = document.createElement('div');
            error.className = 'error_message';
            error.innerText = message;
            field.insertAdjacentElement('afterend', error);
        };

        if (!emailRegex.test(email)) {
            showError('email', 'Please enter a valid email.');
            isValid = false;
        }

        if (!passwordRegex.test(password)) {
            showError('password', 'Password must have at least 6 characters.');
            isValid = false;
        }

        if (isValid) {
            alert('Login successful!');
            form.reset();
        }
    });
});