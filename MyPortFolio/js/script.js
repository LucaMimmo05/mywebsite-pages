document.getElementById('downloadButton').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'zip/CV.zip';  // URL del file sul server
    link.download = 'CV.zip';   // Nome del file da scaricare
    link.click();
});

window.addEventListener("scroll", function() {
    var skillsSection = document.querySelector("#skills");
    var aboutSection = document.querySelector("#about");
    var skillsSectionPosition = skillsSection.getBoundingClientRect();
    var aboutSectionPosition = aboutSection.getBoundingClientRect();
    var windowHeight = window.innerHeight;

    var circularChartsSkills = skillsSection.querySelectorAll(".circular-chart");
    var circularChartsAbout = aboutSection.querySelectorAll(".circular-chart");

    circularChartsSkills.forEach(function(chart) {
        if (
            skillsSectionPosition.top < windowHeight &&
            skillsSectionPosition.bottom >= 0 &&
            chart.getBoundingClientRect().top < windowHeight
        ) {
            if (!chart.classList.contains("animate")) {
                chart.classList.add("animate");
            }
        } else {
            chart.classList.remove("animate");
        }
    });

    circularChartsAbout.forEach(function(chart) {
        if (
            aboutSectionPosition.top < windowHeight &&
            aboutSectionPosition.bottom >= 0 &&
            chart.getBoundingClientRect().top < windowHeight
        ) {
            if (!chart.classList.contains("animate")) {
                chart.classList.add("animate");
            }
        } else {
            chart.classList.remove("animate");
        }
    });
});


  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      loop: true,
    });
  });



