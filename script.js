const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('#nav a').forEach((a) =>
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('#inquiry-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Clink's Cabin availability request");
    const body = encodeURIComponent(`Hello,

I'd like to check availability at Clink's Cabin.

Name: ${d.get('name')}
Arrival: ${d.get('arrival')}
Departure: ${d.get('departure')}
Guests: ${d.get('guests')}

Questions or notes:
${d.get('message') || 'None'}

Thank you.`);
    window.location.href = `mailto:clinks.cabin@gmail.com?subject=${subject}&body=${body}`;
  });
}

/* Real  map using Leaflet + OpenStreetMap */
if (typeof L !== 'undefined' && document.getElementById('-map')) {
const map = L.map('regional-map', {
  scrollWheelZoom: false,
  doubleClickZoom: false,
  touchZoom: false,
  boxZoom: false,
  keyboard: false,
  dragging: false,
  zoomControl: true,
  minZoom: 9,
  maxZoom: 10
});

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);

  /* View includes Burt Lake, Mullett Lake, Indian River and wider regional context. */
  map.fitBounds([[45.30, -85.05], [45.82, -84.30]]);

.bindPopup("<strong>Clink's Cabin</strong><br>Indian River, Michigan");
  const cabinIcon = L.divIcon({
    className: 'cabin-map-marker',
    html: '<span aria-hidden="true">★</span>',
    iconSize: [46, 46],
    iconAnchor: [23, 23]
  });

  L.marker(cabin, { icon: cabinIcon })
    .addTo(map)
    .bindPopup("<strong>Clink's Cabin</strong><br>Indian River, Michigan");
}
