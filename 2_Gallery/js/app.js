document.addEventListener("DOMContentLoaded", function() {

  let images = document.querySelectorAll("li img");
  let imagesArray = Array.prototype.slice.call(images);
  let body = document.querySelector("body");

  //expanded event added to each image in gallery
  for (let i = 0; i < imagesArray.length; i++) {
    imagesArray[i].addEventListener("click", showExpaned);
  }

  //div container for image to expand created with fullScreen class
  let div = document.createElement("div");
  div.classList.add("fullScreen");

  //function adds image and button(with closing event)into div container
  function showExpaned() {
    let url = this.getAttribute("src");
    div.innerHTML = `<img src=${url}><button class="close">close</button>`;
    body.appendChild(div);

    let closeButton = document.querySelector(".close");
    closeButton.addEventListener("click", closeImage)
  }

  //function removes div with expanded image
  function closeImage() {
    let expandedImgToRemove = document.querySelector(".fullScreen");
    expandedImgToRemove.parentElement.removeChild(expandedImgToRemove);
  }
});
