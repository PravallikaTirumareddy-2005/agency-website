// Initialize EmailJS
(function() {
    emailjs.init("YIGWBc-MnEj-R5nLA");
})();

// Mobile Menu
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Navbar shadow on scroll
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});

// Scroll Reveal
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle("show");
    });
});

// Contact Form Email Sending
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const name = this.querySelector("input[type='text']").value;
    const email = this.querySelector("input[type='email']").value;
    const message = this.querySelector("textarea").value;

    emailjs.send("service_jbl87cy", "template_r18aav2", {
        name: name,
        email: email,
        message: message
    })
    .then(function() {
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    }, function(error) {
        alert("Failed to send message. Check console.");
        console.log(error);
    });
});
