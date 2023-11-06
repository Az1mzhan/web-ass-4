import * as Lightbox from "./lightbox.js";
import { playIntroAudio } from "./playIntroAudio.js";
import { slideIndex } from "./lightbox.js";
import { animateHoveringInfo } from "./hoverInfo.js";

const introAudio = new Audio("../audio/windows_xp.mp3");

$(document).ready(() => {
  // $(introAudio).on("canplay", playIntroAudio(introAudio));

  const hoverShadows = $(".hover-shadow");
  const demos = $(".demo");

  for (let i = 0; i < hoverShadows.length; ++i) {
    $(`.hover-shadow:eq(${i})`).click(() => {
      Lightbox.openModalToCurrentSlide(i + 1);
    });
  }

  for (let i = 0; i < demos.length; ++i) {
    $(`.demo:eq(${i})`).click(() => {
      Lightbox.moveToCurrentSlide(i + 1);
    });
  }

  $(".close-btn").click(() => {
    Lightbox.closeModal();
  });

  $(".prev-slide").click(() => {
    Lightbox.moveToAnotherSlide(-1);
  });

  $(".next-slide").click(() => {
    Lightbox.moveToAnotherSlide(1);
  });

  for (let i = 0; i < hoverShadows.length; i++) {
    $(`.hover-shadow:eq(${i})`).mouseover(() => {
      $(`.hover-shadow:eq(${i})`).animate({ opacity: 0.5 }, "fast");
    });
  }

  for (let i = 0; i < hoverShadows.length; i++) {
    $(`.hover-shadow:eq(${i})`).mouseout(() => {
      $(`.hover-shadow:eq(${i})`).animate({ opacity: 1 }, "fast");
    });
  }
});
