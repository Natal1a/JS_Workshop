document.addEventListener("DOMContentLoaded", function() {

  //tooltips array:
  let tooltips = Array.prototype.slice.call(document.querySelectorAll(".tooltip"));

  //add mouse events (show and hide) to each tooltip:
  tooltips.forEach(function(tooltip) {
    tooltip.addEventListener("mouseover", showTooltip);
    tooltip.addEventListener("mouseout", hideTooltip);
  });

  function showTooltip() {
    //create span element for tooltip text and add it to this tooltip element(css sets visibility):
    let span = document.createElement("span");
    span.classList.add("tooltipText");
    span.innerText = this.dataset.text;
    this.appendChild(span);
  }

  //remove span element with tooltip text
  function hideTooltip() {
    let span = document.querySelector(".tooltipText");
    this.removeChild(span);
  }

});
