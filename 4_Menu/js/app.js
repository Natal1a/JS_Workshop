document.addEventListener("DOMContentLoaded", function() {

  //array of menu elements:
  let mainList = Array.prototype.slice.call(document.querySelectorAll(".nav > ul >li"));

  //add mouse events (show/hide element's list) for each menu element:
  mainList.forEach(function(el) {
    el.addEventListener("mouseover", showList);
    el.addEventListener("mouseout", hideList)
  })

  function showList() {
    //find element's list:
    let ul = this.querySelector("ul");
    //if element has a list show it:
    if (ul) {
      ul.style.display = "block"
    };
  }

  function hideList() {
    //find element's list:
    let ul = this.querySelector("ul");
    //if element has a list hide it:
    if (ul) {
      ul.style.display = "none"
    };
  }
});
