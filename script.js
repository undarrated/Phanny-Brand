window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
  
    if (window.scrollY > 50) { // Adjust the trigger point
      header.classList.add('small');
    } else {
      header.classList.remove('small');
    }
  });
  