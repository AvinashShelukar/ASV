// Example JavaScript for responsive behavior
window.addEventListener('resize', function() {
    // Adjust layout or styles based on window size
    if (window.innerWidth < 768) {
      document.querySelector('.header').style.fontSize = '1.5rem';
    } else {
      document.querySelector('.header').style.fontSize = '2rem';
    }
  });
  
  // Example: Dynamically load content based on screen size
  window.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth < 768) {
      // Load mobile-specific content
      document.querySelector('.content').innerHTML = '<p>Content for mobile</p>';
    } else {
      // Load desktop content
      document.querySelector('.content').innerHTML = '<p>Content for desktop</p>';
    }
  });
  