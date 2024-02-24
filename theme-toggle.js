// Function to toggle 
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);

    // Change color
    const themeColors = {
        light: { '--main-bg-color': '#fff', '--main-text-color': '#000' },
        dark: { '--main-bg-color': '#000', '--main-text-color': '#fff' }
    };

    Object.entries(themeColors[newTheme]).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
    });

    // rotation 
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.classList.toggle('rotate', newTheme === 'dark');
}

// theme toggle button
document.getElementById('theme-toggle').addEventListener('click', function() {
    toggleTheme(); 
});



