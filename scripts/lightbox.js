export const openModal = () => {
  $("#my-modal").css("display", "block");
};

export const closeModal = () => {
  $("#my-modal").css("display", "none");
};

export const showSlides = (n) => {
  const slides = $(".modal-slide");
  const dots = $(".demo");
  const captionText = $("#caption-text");

  for (let i = 0; i < slides.length; ++i)
    $(`.modal-slide:eq(${i})`).css("display", "none");

  for (let i = 0; i < dots.length; ++i)
    $(`.demo:eq(${i})`).removeClass("active");

  $(`.modal-slide:eq(${slideIndex - 1})`).css("display", "block");
  $(`.demo:eq(${slideIndex - 1})`).addClass("active");

  const alt = $(`.demo:eq(${slideIndex - 1})`).attr("alt");

  captionText.html(alt);
};

export let slideIndex = 1;
showSlides(slideIndex);

export const moveToAnotherSlide = (n) => {
  const slides = $(".modal-slide");
  console.log("Slides: ", slides.length);

  if (n > 0 && slideIndex === slides.length) slideIndex = 1;
  else if (n < 0 && slideIndex === 1) slideIndex = slides.length;
  else slideIndex += n;

  showSlides(slideIndex);
};

export const moveToCurrentSlide = (n) => {
  slideIndex = n;

  showSlides(slideIndex);
};

export const openModalToCurrentSlide = (n) => {
  openModal();
  moveToCurrentSlide(n);
};
