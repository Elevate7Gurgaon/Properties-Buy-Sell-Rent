document.addEventListener('DOMContentLoaded', function() {
    // Hero section image carousel
    const heroSection = document.getElementById('hero');
    const heroImages = ['../images/banner-1.webp', '../images/banner-2.webp', '../images/banner-3.webp'];
    let currentHeroImage = 0;

    function changeHeroBackground() {
        heroSection.style.backgroundImage = `url(${heroImages[currentHeroImage]})`;
        currentHeroImage = (currentHeroImage + 1) % heroImages.length;
    }

    setInterval(changeHeroBackground, 5000);

    // Testimonial carousel
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    const testimonials = [
        { name: "Mukesh Kumar", role: "Homeowner", text: "Elevate7 made finding my dream home a breeze. Their expertise and professionalism are unmatched.", image: "testimonial1.jpg" },
        { name: "Shristi Jain", role: "Investor", text: "I've been working with Elevate7 for years. Their market insights have been invaluable for my real estate investments.", image: "testimonial2.jpg" },
        { name: "Jatin", role: "First-time Buyer", text: "As a first-time buyer, I was nervous about the process. Elevate7 guided me every step of the way. Couldn't be happier!", image: "testimonial3.jpg" },
    ];

    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.classList.add('testimonial');
        testimonialCard.innerHTML = `
            
            <h3>${testimonial.name}</h3>
            <p>${testimonial.role}</p>
            <p>${testimonial.text}</p>
        `;
        //<img src="${testimonial.image}" alt="${testimonial.name}">
        testimonialCarousel.appendChild(testimonialCard);
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});