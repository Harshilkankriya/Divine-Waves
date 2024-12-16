// JavaScript for Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = e.target.getAttribute('href');

        // If the link is an external URL or a different page
        if (href.startsWith('http') || href.startsWith('https') || href.includes('/')) {
            return; // Let the default behavior proceed
        }

        // If the link is an internal section
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});


    // Get the button and target section
    const ctaButton = document.getElementById('ctaButton');
    const servicesSection = document.getElementById('services');

    // Add event listener to the button for scroll action
    ctaButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default anchor link behavior

      // Scroll to the services section with smooth behavior
      servicesSection.scrollIntoView({
        behavior: 'smooth', // Enable smooth scroll
        block: 'start'      // Align the section to the top of the viewport
      });
    });


    // Form submission handler
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Placeholder for actual submission logic (e.g., API call)
        alert(`Thank you, ${name}! Your message has been sent.`);

        // Clear form fields
        contactForm.reset();
    });
});
document.querySelector('.arrow.left').addEventListener('click', () => {
    document.querySelector('.service-cards').scrollBy({
        left: -300, // Adjust value to scroll amount
        behavior: 'smooth'
    });
});

document.querySelector('.arrow.right').addEventListener('click', () => {
    document.querySelector('.service-cards').scrollBy({
        left: 300, // Adjust value to scroll amount
        behavior: 'smooth'
    });
});
// Get the menu button, menu container, and document body
const menuButton = document.getElementById('menuButton');
const menuContainer = document.getElementById('menuContainer');
const body = document.body;

// Toggle menu on button click
menuButton.addEventListener('click', function(event) {
  // Prevent the click event from propagating to the document (which would close the menu immediately)
  event.stopPropagation();
  menuContainer.classList.toggle('open');
});

// Close the menu if clicked anywhere outside the menu or the button
body.addEventListener('click', function() {
  if (menuContainer.classList.contains('open')) {
    menuContainer.classList.remove('open');
  }
});

// Prevent the menu from closing when clicking inside the menu itself
menuContainer.addEventListener('click', function(event) {
  event.stopPropagation();
});
