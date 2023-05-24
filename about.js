// Humburger menu for about section
const openHambugerAbout = document.querySelector('.fa-bars');
const menuAbout = document.querySelector('.newMenu');
const closeButtonAbout = document.querySelector('.fa-times');

/* open button */
openHambugerAbout.addEventListener('click', () => {
  menuAbout.style.display = 'block';
  openHambugerAbout.style.display = 'none';
  closeButtonAbout.style.display = 'block';
});

/* clossing button ... */
closeButtonAbout.addEventListener('click', () => {
  menuAbout.style.display = 'none';
  openHambugerAbout.style.display = 'block';
  closeButtonAbout.style.display = 'none';
});

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuAbout.style.display = 'none';
    openHambugerAbout.style.display = 'block';
    closeButtonAbout.style.display = 'none';
  });
});