document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const yearSpan = document.getElementById('year');
  const lastModifiedSpan = document.getElementById('lastModified');
  const albumGrid = document.querySelector('.album-grid');
  const navLinks = navMenu.querySelectorAll('a');

  yearSpan.textContent = new Date().getFullYear();
  lastModifiedSpan.textContent = document.lastModified;

  hamburger.addEventListener('click', () => {
    const hidden = navMenu.classList.toggle('hidden');
    hamburger.setAttribute('aria-expanded', !hidden);
    hamburger.textContent = hidden ? '☰' : '✕';
  });

  // Temple data array (add at least 12 objects)
  const temples = [
    {
      name: "Payson Temple",
      location: "Payson, Utah, USA",
      dedicated: "June 7, 2015",
      area: 96630,
      image: "images/temple1.jpg"
    },
    {
      name: "Washington DC Temple",
      location: "Kensington, Maryland, USA",
      dedicated: "November 19, 1974",
      area: 160000,
      image: "images/temple2.jpg"
    },
    {
      name: "Trujillo Peru Temple",
      location: "Trujillo, Peru",
      dedicated: "June 21, 2015",
      area: 34000,
      image: "images/temple3.jpg"
    },
    {
      name: "Provo City Center Temple",
      location: "Provo, Utah, USA",
      dedicated: "March 20, 2016",
      area: 85000,
      image: "images/temple5.jpg"
    },
    {
      name: "Bogotá Colombia Temple",
      location: "Bogotá, Colombia",
      dedicated: "April 24, 1999",
      area: 53000,
      image: "images/temple6.jpg"
    },
    {
      name: "Billings Montana Temple",
      location: "Billings, Montana, USA",
      dedicated: "November 20, 1999",
      area: 33400,
      image: "images/temple7.jpg"
    },
    {
      name: "Fiji Temple",
      location: "Suva, Fiji",
      dedicated: "June 18, 2000",
      area: 18500,
      image: "images/temple4.jpg"
    },
    {
      name: "Freiberg Germany Temple",
      location: "Freiberg, Germany",
      dedicated: "June 29, 1985",
      area: 8000,
      image: "images/temple8.jpg"
    },
    {
      name: "Detroit Michigan Temple",
      location: "Detroit, Michigan, USA",
      dedicated: "October 23, 1999",
      area: 10500,
      image: "images/temple9.jpg"
    },
    // Add at least 3 more temples
    {
      name: "Salt Lake Temple",
      location: "Salt Lake City, Utah, USA",
      dedicated: "April 6, 1893",
      area: 253015,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
      name: "Paris France Temple",
      location: "Le Chesnay, France",
      dedicated: "May 21, 2017",
      area: 44000,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
    },
    {
      name: "Hong Kong China Temple",
      location: "Hong Kong, China",
      dedicated: "May 26, 1996",
      area: 21000,
      image: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
    }
  ];

  // Card generator
  function renderTemples(list) {
    albumGrid.innerHTML = "";
    list.forEach(t => {
      const figure = document.createElement('figure');
      figure.innerHTML = `
        <img src="${t.image}" alt="${t.name}" loading="lazy">
        <figcaption>
          <strong>${t.name}</strong><br>
          <span>${t.location}</span><br>
          <span>Dedicated: ${t.dedicated}</span><br>
          <span>Area: ${t.area.toLocaleString()} sq ft</span>
        </figcaption>
      `;
      albumGrid.appendChild(figure);
    });
  }

  // Filtering logic
  function filterTemples(type) {
    switch (type) {
      case "Old":
        renderTemples(temples.filter(t => {
          const year = parseInt(t.dedicated.split(',')[1]);
          return year && year < 1900;
        }));
        break;
      case "New":
        renderTemples(temples.filter(t => {
          const year = parseInt(t.dedicated.split(',')[1]);
          return year && year > 2000;
        }));
        break;
      case "Large":
        renderTemples(temples.filter(t => t.area > 90000));
        break;
      case "Small":
        renderTemples(temples.filter(t => t.area < 10000));
        break;
      default:
        renderTemples(temples);
    }
  }

  // Nav click events
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      filterTemples(link.textContent.trim());
    });
  });

  // Initial render (Home)
  renderTemples(temples);
});

