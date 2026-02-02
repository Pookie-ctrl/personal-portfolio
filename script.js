const visitorNameInput = document.getElementById("visitorName");
const greetBtn = document.getElementById("greetBtn");
const greetingDisplay = document.getElementById("greeting");
greetBtn.addEventListener("click", function() {
    if(visitorNameInput.value.trim() == "") {
        greetingDisplay.textContent = "Please enter your name, id love to know your name .";
    } else {
        greetingDisplay.textContent = "Hello👋, " + visitorNameInput.value.trim() + "! Welcome to my portfolio.Thank you for visiting💖🥰.";
        greetingDisplay.style.color = " #ff6f91"; 
        greetingDisplay.style.fontSize = "30px";
        greetingDisplay.style.fontWeight = "bold";
        greetingDisplay.style.fontFamily = "Engagement, cursive";
    }
});

const fadeInElements = document.querySelectorAll('.fade-in');

function checkFadeIn() {
  fadeInElements.forEach(section => {
    const elementPosition = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight - 100;

  
    if (elementPosition < triggerPoint) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkFadeIn);

document.addEventListener('DOMContentLoaded', checkFadeIn);

const navLinks = document.querySelectorAll('.navlinks a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const darkModeBtn = document.getElementById('darkModeBtn');
darkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  sections.forEach(section => {
    if(scrollY >= section.offsetTop - 100 && scrollY < section.offsetTop + section.offsetHeight){
      document.querySelectorAll('.navlinks a').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + section.id) link.classList.add('active');
      });
    }
  });
});
const menuBtn = document.getElementById('menuBtn');
const navLinksContainer = document.querySelector('.navlinks');

menuBtn.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active'); 
});

