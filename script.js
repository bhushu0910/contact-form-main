const form = document.getElementById('contactForm');
        const successModal = document.getElementById('successModal');
        const overlay = document.getElementById('overlay');
        const errorMessages = document.querySelectorAll('.error-message');
        const consentError = document.querySelector('.checkbox-group .error-message');

        function showModal() {
            successModal.style.display = 'block';
            overlay.style.display = 'block';
        }

        function closeModal() {
            successModal.style.display = 'none';
            overlay.style.display = 'none';
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Reset errors
            errorMessages.forEach(msg => msg.style.display = 'none');
            document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            consentError.style.display = 'none';

            // Validate First Name
            const firstName = document.getElementById('firstName');
            if (!firstName.value.trim()) {
                showError(firstName);
                isValid = false;
            }

            // Validate Last Name
            const lastName = document.getElementById('lastName');
            if (!lastName.value.trim()) {
                showError(lastName);
                isValid = false;
            }

            // Validate Email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.match(emailRegex)) {
                showError(email);
                isValid = false;
            }

            // Validate Query Type
            const queryType = document.querySelector('input[name="queryType"]:checked');
            if (!queryType) {
                document.querySelector('.radio-group').nextElementSibling.style.display = 'block';
                isValid = false;
            }

            // Validate Message
            const message = document.getElementById('message');
            if (!message.value.trim()) {
                showError(message);
                isValid = false;
            }

            // Validate Consent
            const consent = document.getElementById('consent');
            if (!consent.checked) {
                consentError.style.display = 'block';
                isValid = false;
            }

            if (isValid) {
                form.reset();
                showModal();
            }
        });

        function showError(input) {
            input.parentElement.classList.add('error');
            input.nextElementSibling.style.display = 'block';
        }

        // Close modal when clicking outside
        overlay.addEventListener('click', closeModal);