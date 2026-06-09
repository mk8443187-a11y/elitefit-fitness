document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const feedback = document.getElementById('formFeedback');
    feedback.innerHTML = '✅ Message sent successfully! We will contact you soon.';
    feedback.style.color = '#ffb347';
    this.reset();
    setTimeout(() => { feedback.innerHTML = ''; }, 3000);
});
