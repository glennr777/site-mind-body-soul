import "./main.css"

const toggleMenu = (to) => {
  const navBar = document.getElementById('navBar');
  let set = to === undefined ? navBar.ariaHidden === 'true' : to;  
  navBar.ariaHidden = set ? 'false' : 'true';
  navBar.tabIndex = set ? 0 : -1;
};

const menuClick = (e) => {
  e.preventDefault?.();
  e.stopImmediatePropagation?.();
  toggleMenu();
};

const updateScroll = () => {
  toggleMenu(document.body.offsetWidth > 480);
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 0);
};

const debouceScroll = () => {
  requestAnimationFrame(updateScroll);
};

document.getElementById('navButton').addEventListener('click', menuClick);
document.body.parentNode.classList.add('ready');

[...document.getElementsByClassName('dialog-opener')].forEach((el) => el.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById(el.attributes['aria-controls'].value).showModal();
}));

[...document.getElementsByClassName('dialog-closer')].forEach((el) => el.addEventListener('click', (e) => {
  e.preventDefault();
  el.parentNode.close();
}));

updateScroll();

window.addEventListener('scroll', debouceScroll);
window.addEventListener('resize', debouceScroll);
