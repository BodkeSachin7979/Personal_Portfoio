        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let message = document.getElementById('message').value;
            let recaptchaResponse = grecaptcha.getResponse();
            if (!recaptchaResponse) {
                alert("Please complete the reCAPTCHA.");
                return;
            }
            fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            })
            .then(response => response.json())
            .then(data => {
                alert("Message sent successfully!");
                document.getElementById('contactForm').reset();
                grecaptcha.reset();
            })
            .catch(error => {
                alert("Error sending message.");
                console.error(error);
            });
        });