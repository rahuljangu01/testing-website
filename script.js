// Simple alert on form submission
document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! Our senior counselor will call you within 24 hours.');
    this.reset();
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#fff';
        header.style.padding = '10px 0';
    } else {
        header.style.padding = '15px 0';
    }
});

// Add active class to nav links on click
const links = document.querySelectorAll('.nav-links li a');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.style.color = '#333');
        this.style.color = '#003087';
    });
});