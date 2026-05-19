// Add smooth scrolling to all navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Scroll smoothly to the target section
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjusts for the thicker sticky navbar height
                behavior: 'smooth'
            });
        }
    });
});