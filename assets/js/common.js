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
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 1000,
        density: {
          enable: true,
          value_area: 500,
        },
      },
      color: {
        value: "#DCFC36",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#DCFC36",
        },
        polygon: {
          nb_sides: 1,
        },
        image: {
          src: "img/github.svg",
          width: 0.1,
          height: 0.1,
        },
      },
      opacity: {
        value: 0.5517792882846864,
        random: false,
        anim: {
          enable: false,
          speed:.3,
          opacity_min: 0.01,
          sync: false,
        },
      },
      size: {
        value: 1.998400639744104,
        random: true,
        anim: {
          enable: false,
          speed:.3,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 0,
        color: "#FFFFFF",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed:.3,
        direction: "top",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 10,
          size: 1,
          duration: 1,
          opacity: 5,
          speed:.3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array
    ) {
      count_particles.innerText =
        window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
