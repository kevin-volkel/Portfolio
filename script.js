$(function () {
  let sections = ["landing", "skills", "resume", "contact", "gallery"];
  let duration = 100;

  $("#skills").hide();
  $("#resume").hide();
  $("#contact").hide();
  $("#gallery").hide();

  let delay = 0;

  const getDir = (nextSection) => {
    let $currSection = $(".active-container")[0];
    let $nextSection = $(`.${nextSection}`)[0];

    //*Determine which way to slide
    let currIndex = 0;
    let nextIndex = 0;
    for (i in sections) {
      if (sections[i] == $currSection.id) currIndex = i;
      if (sections[i] == $nextSection.id) nextIndex = i;
    }

    return nextIndex < currIndex ? "left" : "right";
  };

  function changeSection(newSection) {
    let $activeSection = $(".active-container");
    let $newSection = $(`.${newSection}`);
    $(`#${newSection}-link`).addClass("active-link");
    $(`#${$activeSection[0].id}-link`).removeClass("active-link");
    //*Does it need to change?
    if ($activeSection[0] == $newSection[0]) return false;

    let direction = getDir(newSection);

    //*  Remove Old Section
    hideSection($activeSection, direction);

    //*  Show new Section
    setTimeout(() => {
      showSection($newSection, direction);
    }, duration);
  }

  function hideSection(section, dir) {
    if (dir == "left") {
      section.css("left", "210vw");
    } else {
      section.css("left", "-210vw");
    }

    setTimeout(() => {
      section.hide().css(dir, "0");
    }, duration / 2);
    section.removeClass("active-container");
  }

  function showSection(section, dir) {
    if (dir == "left") {
      section.css("left", "-210vw");
    } else {
      section.css("left", "210vw");
    }
    setTimeout(() => {
      section.show().css("left", 0);
    }, duration / 2);
    section.addClass("active-container");
  }

  function animateName() {
    resetName();
    for (let i = 1; i < 6; i++) {
      let letter = $(`.fname-letter:nth-of-type(${i})`);
      letter.animate(
        {
          right: 0,
        },
        100 * Math.abs(i - 6)
      );
    }

    for (let i = 1; i < 7; i++) {
      let letter = $(`.lname-letter:nth-of-type(${i})`);
      letter.animate(
        {
          left: 0,
        },
        100 * i
      );
    }
  }

  function resetName() {
    $(".fname-letter").css("right", "200vw");
    $(".lname-letter").css("left", "200vw");
  }

  function reanimateName(e) {
    if (e.key == " ") {
      if ($(".active-container")[0] == document.getElementById("landing")) {
        resetName();
        setTimeout(animateName, 400);
      }
    }
  }

  function filterGallery(e) {
    let filter = e.target.value;
    if (filter == "all") {
      $(".gallery-item").css("display", "block");
    } else {
      $(".gallery-item").css("display", "none");
      $(`.${filter}`).css("display", "block");
    }
  }

  $("#contact-link").on("click", () => changeSection("contact"));
  $("#landing-link").on("click", () => changeSection("landing"));
  $("#resume-link").on("click", () => changeSection("resume"));
  $("#skills-link").on("click", () => changeSection("skills"));
  $("#gallery-link").on("click", () => changeSection("gallery"));
  $("#filter").on("change", filterGallery);

  animateName();
  window.addEventListener("keydown", reanimateName);
});
