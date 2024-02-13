document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const navHighlight = document.getElementById('nav-highlight');

    if (navLinks.length > 0 && navHighlight) {
        function positionHighlightBar(link) {
            const linkRect = link.getBoundingClientRect();
            const navRect = link.parentElement.getBoundingClientRect();

            if (navHighlight) {
                navHighlight.style.width = `${linkRect.width}px`;
                navHighlight.style.left = `${linkRect.left - navRect.left}px`;
            } else {
                console.error("navHighlight element not found");
            }
        }

        navLinks.forEach((link, index) => {
            link.addEventListener('mouseover', () => {
                positionHighlightBar(link);
            });

            link.addEventListener('mouseout', () => {
                const activeLink = document.querySelector('.nav-link.active');
                if (activeLink) {
                    positionHighlightBar(activeLink);
                } else if (navHighlight) {
                    navHighlight.style.width = '0';
                } else {
                    console.error("navHighlight element not found");
                }
            });

            link.addEventListener('click', (event) => {
                const href = link.getAttribute('href');
                if (href && href !== '#') {
                    // Navigate to the specified URL if it's not a placeholder anchor link (#)
                    return true;
                }

                event.preventDefault();

                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                link.classList.add('active');
                positionHighlightBar(link);
            });
        });
    } else {
        console.error("navLinks or navHighlight element not found.");
    }
});

