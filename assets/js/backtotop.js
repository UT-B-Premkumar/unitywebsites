  // Get the button
  const backToTopBtn = document.getElementById('backToTopBtn');

  // When the user scrolls down 100px from the top of the document, show the button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // When the user clicks on the button, scroll to the top of the document smoothly
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
