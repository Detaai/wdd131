document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
document.querySelectorAll(".highlight").forEach(function (element) {
  element.addEventListener("mouseover", function () {
    this.style.textDecoration = "underline";
  });
  element.addEventListener("mouseout", function () {
    this.style.textDecoration = "none";
  });
});