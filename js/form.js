// Form Handling Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            formStatus.textContent = 'Sending message...';
            formStatus.className = '';
            formStatus.style.display = 'block';
            
            // Simulate API call (replace with actual Formspree endpoint)
            setTimeout(() => {
                // In a real implementation, you would send this to Formspree
                // fetch('https://formspree.io/f/your-form-id', {
                //     method: 'POST',
                //     body: new FormData(contactForm),
                //     headers: {
                //         'Accept': 'application/json'
                //     }
                // })
                // .then(response => response.json())
                // .then(data => {
                //     if (data.ok) {
                //         showSuccess();
                //     } else {
                //         showError();
                //     }
                // })
                // .catch(error => {
                //     showError();
                // });
                
                // For demo purposes, simulate success
                showSuccess();
            }, 1500);
        });
    }
    
    function showSuccess() {
        formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
        formStatus.className = 'success';
        
        // Reset form
        contactForm.reset();
        
        // Hide status after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
    
    function showError() {
        formStatus.textContent = 'Oops! Something went wrong. Please try again.';
        formStatus.className = 'error';
        
        // Hide status after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
    
    // Add input animation effects
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Initialize state
        if (input.value.trim() !== '') {
            input.parentElement.classList.add('focused');
        }
    });
});