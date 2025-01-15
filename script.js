// Navbar
const menuHamburger = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-link");
const navItems = document.querySelectorAll(".nav-link a"); 

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
    menuHamburger.classList.toggle('active');

    
    if (navLinks.classList.contains('mobile-menu')) {
        document.body.style.overflow = 'hidden'; 
    } else {
        document.body.style.overflow = ''; 
    }
});


navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('mobile-menu'); 
        menuHamburger.classList.remove('active'); 
        document.body.style.overflow = ''; 
    });
});

// Diaporama
const items = document.querySelectorAll('.experience-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateDisplay() {
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex) {
            item.classList.add('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateDisplay();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateDisplay();
});

updateDisplay();

// Accordéon
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        const isActive = answer.style.display === 'block';
        
        
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');

        
        if (!isActive) {
            answer.style.display = 'block';
        }
    });
});





