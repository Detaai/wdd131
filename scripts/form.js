// Product array
const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Hoverboard" },
  { id: "ac-2000", name: "Hydrator" },
  { id: "jj-1969", name: "Jaws 19" }
];

document.addEventListener("DOMContentLoaded", () => {
  // Populate product select
  const select = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });

  // Footer year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});