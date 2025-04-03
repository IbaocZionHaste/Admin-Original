// darkMode.js
export function initializeDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark'); // Apply dark mode
        document.getElementById('switch-mode').checked = true; // Keep the checkbox checked
    } else {
        document.body.classList.remove('dark'); // Apply light mode
        document.getElementById('switch-mode').checked = false; // Uncheck the checkbox
    }
}

export function toggleDarkMode(event) {
    if (event.target.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
    }
}
