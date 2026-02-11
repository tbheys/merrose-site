const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
const navOverlay = document.getElementById('navOverlay');
const navClose = document.getElementById('navClose');

document.getElementById('current-year').textContent = new Date().getFullYear();

/**
 * Toggles the visibility of the navigation menu and updates UI state.
 * @param {boolean} force - Optional boolean to force a specific state.
 */
function toggleMenu(force) {
    const isOpen = mainNav.classList.toggle('active', force);
    
    // Sync other elements to the 'active' state of the main menu
    navOverlay.classList.toggle('active', isOpen);
    hamburger.classList.toggle('hidden', isOpen);
    
    // Accessibility and UX
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

// Single event listener for all closing triggers (Overlay and X button)
[navOverlay, navClose].forEach(el => el.addEventListener('click', () => toggleMenu(false)));

// Open menu
hamburger.addEventListener('click', () => toggleMenu(true));

// Event Delegation: Listen for clicks on the nav parent instead of every link
mainNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        toggleMenu(false);
    }
});