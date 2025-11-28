
// Existing behavior + session logic
document.querySelectorAll('.rule-header').forEach(header => {
    header.addEventListener('click', () => {
        const ruleItem = header.parentElement;
        const isActive = ruleItem.classList.contains('active');
        document.querySelectorAll('.rule-item').forEach(item => {
            item.classList.remove('active');
        });
        if (!isActive) {
            ruleItem.classList.add('active');
        }
    });
});

// Navigation
window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1) || 'home';
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

    const targetSection = document.getElementById(hash);
    if (targetSection) {
        targetSection.classList.add('active');
        const targetLink = document.querySelector(`a[href="#${hash}"]`);
        if (targetLink && !targetLink.hasAttribute('target')) {
            targetLink.classList.add('active');
        }
    }

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

if (window.location.hash) {
    window.dispatchEvent(new Event('hashchange'));
}
