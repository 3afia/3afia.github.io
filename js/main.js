// fade when scrolling down and show when scrolling up

let lastKnownScrollPosition = 0;
let ticking = false;
let shouldFade = false;

const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
let menuBtnClicked = false;

menuBtn.addEventListener('click', openMenu);

function openMenu() {
	if (!menuBtnClicked) {
			menu.style.display = 'flex';
			menu.style.margin = '0';
			menu.style.flexFlow = 'column';
			menu.style.justifyContent = 'center';
			menu.style.alignItems = 'center';
			menu.style.height = '100vh';
			menu.style.width = '100vw';
			menu.style.position = 'absolute';
			menu.style.overflow = 'hidden';
			menu.style.backgroundColor = '#fff';
			menu.style.border = '5px solid #000';
			menuBtn.style.transform = 'translateY(5px)', 'translateX(-5px)';
			menuBtnClicked = !menuBtnClicked;
		} else {
			menu.style.display = 'none';
			menu.style.overflow = '';
			menuBtn.style.transform = 'translateY(-5px)', 'translateX(5px)';
			menuBtnClicked = !menuBtnClicked;	
		}
}
const changeOpacity = (fade) => {
	if (fade) {
			nav.style.opacity = "0";
	} else {
			nav.style.opacity = "1";
	}
}

window.addEventListener('scroll', () => {
  if (window.scrollY > lastKnownScrollPosition) {
	  shouldFade = true;
	  lastKnownScrollPosition = window.scrollY;
  } else {
	  shouldFade = false;
	  lastKnownScrollPosition = window.scrollY;
  }
  if (!ticking) {
    window.requestAnimationFrame(() => {
      changeOpacity(shouldFade);
      ticking = false;
    });
  }
  ticking = true;
}); 

// using typed library
let strings =  document.getElementById("typed-strings");
let typedId =  document.getElementById("typed");

const typed = new Typed(typedId, {
    stringsElement: strings,
	typeSpeed: 50,
	startDelay: 0,
	backSpeed: 30,
	smartBackspace: true,
	backDelay: 700,
	//loop: false,
	//loopCount: Infinity,
	showCursor: false,
	contentType: 'html',
	
  });
  
// copy Email 
const email = document.getElementById("email");
const emailBtn = document.getElementById("email-btn");

function copy() {
	document.execCommand("copy");	
}
function select() {
	email.textContent; 	
}
emailBtn.addEventListener("click", ()=> {
	select();
	copy();
});





