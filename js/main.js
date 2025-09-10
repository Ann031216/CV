'use strict';

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".skill-level").forEach(el => {
    const level = el.getAttribute("data-level");
    setTimeout(() => {
      el.style.width = level + "%";
    }, 200); 
  });
});