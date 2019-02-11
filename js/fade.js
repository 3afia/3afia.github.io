const nav = document.querySelector('.nav');
let scrollPos = 0;
let ticking = false;
let shouldFade = false;
const changeOpacity = (fade) => {
	if (fade) {
			nav.style.opacity = "0";
	} else {
			nav.style.opacity = "1";
	}
}

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollPos) {
	  shouldFade = true;
	  scrollPos = window.scrollY;
  } else {
	  shouldFade = false;
	  scrollPos = window.scrollY;
  }
  if (!ticking) {
    window.requestAnimationFrame(() => {
      changeOpacity(shouldFade);
      ticking = false;
    });
  }
  ticking = true;
}); 