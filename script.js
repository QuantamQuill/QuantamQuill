// 1. Scroll-based animations
// Detect when the user scrolls and trigger animations when the element is in view

const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

const handleScroll = () => {
    const windowHeight = window.innerHeight;
    
    elementsToAnimate.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight * 0.75) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', handleScroll);

// Initially trigger the animation for elements that are in view when the page loads
handleScroll();

// 2. Dynamic background change on button click

const backgroundButton = document.querySelector('.background-change-btn');
const body = document.body;

backgroundButton.addEventListener('click', () => {
    const randomColor = getRandomColor();
    body.style.background = randomColor;
});

// Generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 3. Interactive team member details
const teamMembers = document.querySelectorAll('.member');

teamMembers.forEach((member) => {
    member.addEventListener('click', () => {
        const name = member.querySelector('h2').textContent;
        alert(`You clicked on ${name}'s profile. More information coming soon!`);
    });
});