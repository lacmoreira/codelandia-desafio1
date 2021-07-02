const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000,
  reset: true
});

alert('hello world');
ScrollReveal().reveal('.container', { delay: 200 });
ScrollReveal().reveal('.data', { delay: 400 });
ScrollReveal().reveal('.title', { delay: 500 });
ScrollReveal().reveal('.texto', { delay: 600 });