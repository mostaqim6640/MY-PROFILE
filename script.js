// Small interactions: theme toggle, smooth scroll, and a fake contact handler
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

themeToggle.addEventListener('click', ()=>{
  const isLight = root.classList.toggle('light');
  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.textContent = isLight ? '☀️' : '🌙';
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if (href.length>1) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth', block:'start'});
    }
  })
});

function handleContact(e){
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const msg = form.message.value;
  // If you have a Formspree endpoint, set it here. Otherwise, show a success message.
  const FORMSPREE_ENDPOINT = form.getAttribute('data-endpoint') || '';
  if (FORMSPREE_ENDPOINT) {
    fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(form)
    }).then(res=>{
      if (res.ok) {
        alert('Thanks — message sent!');
        form.reset();
      } else {
        alert('Submission failed — please try email: hello@example.com');
      }
    }).catch(()=>{
      alert('Network error — please try email: hello@example.com');
    })
  } else {
    alert(`Thanks — I'll get back to ${email} shortly!`);
    form.reset();
  }
}

// Lightbox implementation
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<img alt="expanded image"><button aria-label="Close" style="position:absolute;top:18px;right:18px;background:transparent;border:0;color:white;font-size:22px;cursor:pointer">✕</button>';
document.body.appendChild(lightbox);
const lbImg = lightbox.querySelector('img');
const lbClose = lightbox.querySelector('button');
document.querySelectorAll('.gallery img').forEach(img=>{
  img.addEventListener('click', ()=>{
    lbImg.src = img.src;
    lbImg.alt = img.alt || '';
    lightbox.classList.add('open');
  })
});
lbClose.addEventListener('click', ()=> lightbox.classList.remove('open'));
lightbox.addEventListener('click', (e)=>{ if (e.target===lightbox) lightbox.classList.remove('open') });
