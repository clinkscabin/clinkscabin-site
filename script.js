const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('#nav a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.querySelector('#year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const form = document.querySelector('#inquiry-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Clink's Cabin availability request");
    const body = encodeURIComponent(
      `Hello,\n\nI'd like to check availability at Clink's Cabin.\n\n` +
      `Name: ${data.get('name')}\n` +
      `Arrival: ${data.get('arrival')}\n` +
      `Departure: ${data.get('departure')}\n` +
      `Guests: ${data.get('guests')}\n\n` +
      `Questions or notes:\n${data.get('message') || 'None'}\n\nThank you.`
    );

    window.location.href =
      `mailto:clinks.cabin@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* ========================================
   REGIONAL MAP
   ======================================== */

if (typeof L !== 'undefined' && document.getElementById('regional-map')) {
  /*
    Keep the exact cabin marker, but deliberately restrict the public map
    to a fixed regional view. Visitors cannot zoom in beyond zoom level 9.
  */
  const cabin = [45.3903056634, -84.6272972507];

  const map = L.map('regional-map', {
    center: [45.47, -84.62],
    zoom: 9,
    minZoom: 9,
    maxZoom: 9,
    zoomControl: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    touchZoom: false,
    boxZoom: false,
    keyboard: false,
    dragging: false,
    tap: false
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 9,
    maxZoom: 9,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);

  const cabinIcon = L.divIcon({
    className: 'cabin-map-marker',
    html: '<span aria-hidden="true">★</span>',
    iconSize: [46, 46],
    iconAnchor: [23, 23]
  });

  L.marker(cabin, {
    icon: cabinIcon,
    keyboard: false,
    interactive: false
  }).addTo(map);
}
