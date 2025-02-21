
// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll effect for sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop <= window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show loading state
    this.reset();
    
    // Form data
    const formData = new FormData(this);
    
    // Add your Formspree.io form key
    const formKey = 'mqaeyvvy';
    
    // Ajax request to Formspree.io
    fetch(`https://formspree.io/f/${formKey}`, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        },
        mode: 'cors',
        credentials: 'omit'
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert('Thank you for your message! Your email has been sent successfully.');
        } else {
            alert('Oops! Something went wrong. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! Something went wrong. Please try again.');
    });
});

// Image gallery lightbox
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
const lightboxImage = document.createElement('img');
lightbox.appendChild(lightboxImage);
const lightboxClose = document.createElement('div');
lightboxClose.textContent = '×';
lightboxClose.className = 'lightbox-close';
lightbox.appendChild(lightboxClose);
document.body.appendChild(lightbox);

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImage.src = img.src;
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.width = '100vw';
        lightbox.style.height = '100vh';
        lightbox.style.backgroundColor = 'rgba(0,0,0,0.8)';
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

