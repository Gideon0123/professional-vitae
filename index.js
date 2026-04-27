
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body; 

function updateIcon() {
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
} 

updateIcon();

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }

    updateIcon();
});


const emailBtn = document.getElementById('email-btn');

emailBtn.addEventListener('click', () => {
  // This tells the browser to open the user's email client
  window.location.href = 'mailto:your.email@gmail.com';
});