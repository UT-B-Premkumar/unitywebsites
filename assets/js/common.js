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

  $(window).on("scroll", function () {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition > 140) {
      $("header").addClass("fixed");
    }
    if (scrollPosition < 140) {
      $("header").removeClass("fixed");
    }
  });

  $(document).ready(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("active");
      $(".mobile-nav-container").toggle();
    });

    $(".hamburger").on("focusout", function () {
      setTimeout(() => {
        $(this).removeClass("active");
        $(".mobile-nav-container").hide();
      }, 100);
    });
  });