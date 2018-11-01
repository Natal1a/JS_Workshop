document.addEventListener("DOMContentLoaded", function(event) {

  //variables for images array, filtering buttons and input defined
  let imagesArray = Array.prototype.slice.call(document.querySelectorAll("img"));
  let showButton = document.getElementById("showButton");
  let hideButton = document.getElementById("hideButton");
  let input = document.getElementById("tagInput");

  //click event on buttons
  showButton.addEventListener("click", showImages);
  hideButton.addEventListener("click", hideImages);

  function showImages() {
    for (let i = 0; i < imagesArray.length; i++) {
      //remove class invisible before tags check in case added in previous filtering:
      imagesArray[i].classList.remove("invisible");
      //add class invisible if provided input value not found among image tags:
      if (imagesArray[i].dataset.tag.indexOf(input.value) < 0) {
        imagesArray[i].classList.add("invisible");
      }
    }
    input.value = ''; //clear input value
  };

  function hideImages() {

    for (let i = 0; i < imagesArray.length; i++) {
      //remove class invisible before tags check in case added in previous filtering:
      imagesArray[i].classList.remove("invisible");
      //add class invisible if provided input value found among image tags:
      if (imagesArray[i].dataset.tag.indexOf(input.value) >= 0) {
        imagesArray[i].classList.add("invisible");
      }
    }
    input.value = ''; //clear input value
  };
});
