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

// Smooth scroll for navbar links
document.querySelectorAll('.navbar-box a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Remove active class from all navbar links
        document.querySelectorAll('.navbar-box a').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to clicked link
        this.classList.add('active');
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Adjust offset based on screen size
            const isMobile = window.innerWidth <= 768;
            const headerHeight = isMobile ? 140 : 120;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
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
// const downloadBtn = document.querySelector('.resume-icons .fa-download');
const viewBtn = document.querySelector('.resume-icons .fa-eye');

viewBtn.addEventListener('click', function() {
    // Replace 'your-resume.pdf' with the actual path to your resume file
    const resumeUrl = '../docs/Amogha_Khare_Resume April 25.pdf';
    
    // Open the resume in a new tab
    window.open(resumeUrl, '_blank');
});

// Add cursor pointer to elements with click events
downloadBtn.style.cursor = 'pointer';
viewBtn.style.cursor = 'pointer';