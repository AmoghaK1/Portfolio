// Intersection Observer for scroll animations on mobile
document.addEventListener('DOMContentLoaded', () => {
  // Only run scroll animations on mobile devices
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // Get all elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.project-box1, .project-box2, .left-box, .right-box, .p-s-box');
    
    // Make sure all elements are initially visible in the DOM but with opacity 0
    animatedElements.forEach(element => {
      element.classList.add('scroll-animated');
      // Ensure the element is in the DOM but invisible
      element.style.visibility = 'visible';
      element.style.opacity = '0';
    });
    
    // Create the Intersection Observer with optimized options
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // If element is in view
        if (entry.isIntersecting) {
          // Use requestAnimationFrame for smoother animations
          requestAnimationFrame(() => {
            // Make sure element is visible before animating
            entry.target.style.visibility = 'visible';
            // Then add the class that triggers the animation
            entry.target.classList.add('visible');
          });
          // Unobserve after animation triggered
          observer.unobserve(entry.target);
        }
      });
    }, {
      // Optimized options for smoother transitions
      threshold: 0.15, // Increased threshold so animation starts when more of element is visible
      rootMargin: '0px 0px -5% 0px' // Adjusted margin
    });
    
    // Start observing each element
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    // Add will-change property to elements that will animate
    document.querySelectorAll('.scroll-animated').forEach(el => {
      el.style.willChange = 'opacity, transform';
    });
  }
});