// Function to trigger glitch effect
function triggerGlitchEffect() {
    try {
        console.log('Triggering glitch effect...');
        
        // Add glitch shake to entire page
        document.body.classList.add('page-glitch');
        
        // Create temporary overlay for color distortion
        const overlay = document.createElement('div');
        overlay.classList.add('body-glitch-overlay');
        document.body.appendChild(overlay);
        
        // Add glitch colors to random elements
        const elements = document.querySelectorAll('.name-box, .project-box1, .project-box2, .social-box, .techstack-box');
        const randomElements = Array.from(elements).sort(() => 0.5 - Math.random()).slice(0, 2);
        
        randomElements.forEach(element => {
            element.classList.add('glitch-colors');
        });
        
        // Remove effects after animation completes
        setTimeout(() => {
            document.body.classList.remove('page-glitch');
            if (overlay.parentNode) {
                overlay.remove();
            }
            
            randomElements.forEach(element => {
                element.classList.remove('glitch-colors');
            });
        }, 150);
        
    } catch (error) {
        console.error('Error in glitch effect:', error);
    }
}

// Block About and Contact buttons with "under construction" alerts
// document.getElementById('work-btn').addEventListener('click', function() {
//     alert('"Work" section is under construction.');
// });

// document.getElementById('contact-btn').addEventListener('click', function() {
//     alert('"Contact" section is under construction.');
// });

// document.getElementById('me-btn').addEventListener('click', function() {
//     alert("Hold on...He's cooking...");
// });

document.getElementById('theme-btn').addEventListener('click', function() {
    alert('Lets stick to Night mode for now...');
     this.checked = true;
    });

// Navbar page transition effects with scroll-first behavior
document.querySelectorAll('.navbar-box a').forEach(navLink => {
    navLink.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Navbar link clicked:', this.textContent.trim());
        
        const targetPage = this.getAttribute('href');
        const linkText = this.textContent.trim();
        
        // Don't redirect if it's an anchor link - just scroll
        if (targetPage.startsWith('#')) {
            const targetElement = document.querySelector(targetPage);
            if (targetElement) {
                const isMobile = window.innerWidth <= 768;
                const headerHeight = isMobile ? 140 : 120;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            return;
        }
        
        // For page redirects, first scroll to relevant section, then glow, then redirect
        let targetSection = null;
        let elementsToScale = [];
        let elementsToDistort = [];
        
        // Determine target section and elements based on navbar item
        switch(linkText.toLowerCase()) {
            case 'work':
                targetSection = '#target-project';
                elementsToScale = document.querySelectorAll('.project-box1, .project-box2');
                elementsToDistort = document.querySelectorAll('.name-box, .tagline-box, .location-box, .resume-box, .social-box, .techstack-box, .experience-box, .theme-toggle-box, .email-box, .p-s-box');
                break;
            case 'contact':
                targetSection = '#target-contact';
                elementsToScale = document.querySelectorAll('.social-box, .email-box');
                elementsToDistort = document.querySelectorAll('.name-box, .tagline-box, .location-box, .resume-box, .techstack-box, .experience-box, .project-box1, .project-box2, .theme-toggle-box, .p-s-box');
                break;
            case 'me':
                targetSection = '#target-me';
                elementsToScale = document.querySelectorAll('.name-box');
                elementsToDistort = document.querySelectorAll('.tagline-box, .location-box, .resume-box, .social-box, .techstack-box, .experience-box, .project-box1, .project-box2, .theme-toggle-box, .email-box, .p-s-box');
                break;
            default:
                // Default behavior for other links
                elementsToScale = document.querySelectorAll('.name-box, .techstack-box, .experience-box');
                elementsToDistort = document.querySelectorAll('.tagline-box, .location-box, .resume-box, .social-box, .project-box1, .project-box2');
                break;
        }
        
        // Phase 1: Scroll to target section first
        if (targetSection) {
            const targetElement = document.querySelector(targetSection);
            if (targetElement) {
                const isMobile = window.innerWidth <= 768;
                const headerHeight = isMobile ? 140 : 120;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
          // Phase 2: After scroll completes (1s), start glow effects
        setTimeout(() => {
            // Add transitioning class to body for overlay effect
            document.body.classList.add('transitioning');
            
            // Trigger glitch effect multiple times during transition
            triggerGlitchEffect();
            
            // Add loading state to navbar
            const navbar = document.querySelector('.navbar-box');
            navbar.classList.add('loading');
            
            // Add transition class to all elements
            document.querySelectorAll('.name-box, .tagline-box, .location-box, .theme-toggle-box, .resume-box, .social-box, .techstack-box, .email-box, .experience-box, .project-box1, .project-box2, .p-s-box').forEach(element => {
                element.classList.add('page-transition');
            });
            
            // Start glow effects
            elementsToScale.forEach(element => {
                element.classList.add('scale-glow');
            });
            
            // Start distortion effects after 0.2s
            setTimeout(() => {
                elementsToDistort.forEach(element => {
                    element.classList.add('distort-effect');
                });
                
                // Trigger another glitch
                triggerGlitchEffect();
            }, 200);
            
            // Additional glitch effects during the transition
            setTimeout(() => triggerGlitchEffect(), 800);
            setTimeout(() => triggerGlitchEffect(), 1500);
            
        }, 1000);
        
        // Phase 3: After 2 seconds of glow effects, fade out
        setTimeout(() => {
            document.querySelectorAll('.name-box, .tagline-box, .location-box, .theme-toggle-box, .resume-box, .social-box, .techstack-box, .email-box, .experience-box, .project-box1, .project-box2, .p-s-box').forEach(element => {
                element.classList.add('fade-out');
            });
        }, 3000);
        
        // Phase 4: Navigate to new page after fade out (4s total)
        setTimeout(() => {
            window.location.href = targetPage;
        }, 4000);
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar-box');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Resume buttons functionality
const viewBtn = document.querySelector('.resume-icons .fa-eye');

viewBtn.addEventListener('click', function() {
    // Replace 'your-resume.pdf' with the actual path to your resume file
    const resumeUrl = '../docs/Amogha_Khare_Resume April 25.pdf';
    
    // Open the resume in a new tab
    window.open(resumeUrl, '_blank');
});

// Add cursor pointer to elements with click events
if (viewBtn) {
    viewBtn.style.cursor = 'pointer';
}