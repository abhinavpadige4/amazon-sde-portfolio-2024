// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.classList.add('dark-theme');
        updateThemeIcon(true);
    }
    
    themeToggle.addEventListener('click', function() {
        const isDarkTheme = htmlElement.classList.toggle('dark-theme');
        
        // Save preference to localStorage
        if (isDarkTheme) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        
        updateThemeIcon(isDarkTheme);
    });
    
    function updateThemeIcon(isDark) {
        const icon = themeToggle.querySelector('i');
        if (isDark) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    
    // Add subtle animation to theme toggle on load
    themeToggle.style.opacity = '0';
    setTimeout(() => {
        themeToggle.style.opacity = '1';
        themeToggle.style.transition = 'opacity 0.5s ease';
    }, 300);
});