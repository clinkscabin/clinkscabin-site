const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));document.querySelector('#year').textContent=new Date().getFullYear();document.querySelector('#inquiry-form').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const subject=encodeURIComponent("Clink's Cabin availability request");const body=encodeURIComponent(`Hello,

I'd like to check availability at Clink's Cabin.

Name: ${d.get('name')}
Arrival: ${d.get('arrival')}
Departure: ${d.get('departure')}
Guests: ${d.get('guests')}

Questions or notes:
${d.get('message')||'None'}

Thank you.`);window.location.href=`mailto:clinks.cabin@gmail.com?subject=${subject}&body=${body}`;});