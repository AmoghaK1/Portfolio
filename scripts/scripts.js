// Block About and Contact buttons with "under construction" alerts
document.getElementById('about-btn').addEventListener('click', function() {
    alert('About section is under construction.');
});

document.getElementById('contact-btn').addEventListener('click', function() {
    alert('Contact section is under construction.');
});

document.getElementById('theme-btn').addEventListener('click', function() {
    alert('Lets stick to Night mode for now...');
     this.checked = true;
    });
// Resume buttons functionality
// const downloadBtn = document.querySelector('.resume-icons .fa-download');
const viewBtn = document.querySelector('.resume-icons .fa-eye');

viewBtn.addEventListener('click', function() {
    // Replace 'your-resume.pdf' with the actual path to your resume file
    const resumeUrl = 'G://PROGRAMMING//College//WEB TECH//Portfolio//docs//Amogha_Khare_Resume April 25.pdf';
    
    // Open the resume in a new tab
    window.open(resumeUrl, '_blank');
});

// Add cursor pointer to elements with click events
downloadBtn.style.cursor = 'pointer';
viewBtn.style.cursor = 'pointer';