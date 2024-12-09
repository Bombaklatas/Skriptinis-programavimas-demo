document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');

    // Check for saved user preference, if any, on load of the website
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
        modeToggle.textContent = 'Light Mode';
    }

    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);
        modeToggle.textContent = isDarkMode ? 'Light Mode' : 'Night Mode';
    });
});