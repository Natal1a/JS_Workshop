document.addEventListener("DOMContentLoaded", function() {

  let images = document.querySelectorAll("li");
  let btnNext = document.getElementById("nextPicture");
  let btnPrev = document.getElementById("prevPicture");
  let currentImg = 0;
  images[currentImg].classList.add("visible");

  btnNext.addEventListener("click", nextPicture);
  btnPrev.addEventListener("click", prevPicture);

  function nextPicture() {

    images[currentImg].classList.remove("visible");
    currentImg++;
    if (currentImg == images.length) {
      currentImg = 0;
    }
    images[currentImg].classList.add("visible");
  }

  function prevPicture() {
    images[currentImg].classList.remove("visible");
    (currentImg === 0) ? currentImg = images.length - 1 : currentImg--;
    images[currentImg].classList.add("visible")
  }
});
