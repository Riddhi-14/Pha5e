// Wait for the DOM to load before executing animations
window.addEventListener('DOMContentLoaded', () => {
    // GSAP initial animations for hero text and button
    gsap.to("#hero-title", { duration: 1, y: 0, opacity: 1, ease: "power2.out" });
    gsap.to("#hero-subtitle", { duration: 1, y: 0, opacity: 1, ease: "power2.out", delay: 0.3 });
    gsap.to("#hero-btn", { duration: 1, opacity: 1, ease: "back.out(1.7)", delay: 0.9 });
    
    // Also animate images (fade in)
    gsap.to(".hero-image", { duration: 1, opacity: 1, ease: "power2.out", delay: 0.6 });
  });
  
  // --- Hover & Mouse Movement Effects ---
  
  const images = document.querySelectorAll('.hero-image');
  const container = document.querySelector('.image-container');
  
  // When hovering over an image, update class states for vector effect
  images.forEach(img => {
    img.addEventListener('mouseenter', () => {
      images.forEach(i => {
        // Add dimming class to non-hovered images
        if (i !== img) {
          i.classList.add('dimmed');
        }
      });
      // Mark the hovered image
      img.classList.add('hovered');
    });
    
    img.addEventListener('mouseleave', () => {
      // Remove all special classes on mouse leave
      images.forEach(i => {
        i.classList.remove('dimmed');
        i.classList.remove('hovered');
        // Reset transformation in case mousemove effect left offset
        gsap.to(i, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
      });
    });
    
    // Mouse move effect on the hovered image
    img.addEventListener('mousemove', (e) => {
      // Only apply if this image has the hovered class
      if (!img.classList.contains('hovered')) return;
      
      const rect = img.getBoundingClientRect();
      // Calculate mouse position relative to image center
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate a small offset (adjust multiplier for effect intensity)
      const moveX = ((offsetX - centerX) / centerX) * 10;
      const moveY = ((offsetY - centerY) / centerY) * 10;
      
      gsap.to(img, { x: moveX, y: moveY, duration: 0.3, ease: "power2.out" });
    });
  });
  
  
  