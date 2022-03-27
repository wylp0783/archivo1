const openButton = document.querySelector('#openMenuButton'); // DOM
const closeButton = document.querySelector('#closeMenuButton'); // DOM
const navigationBar = document.querySelector('nav');

openButton.addEventListener('click', () => {
    navigationBar.style.display = 'flex';
    openButton.style.display = 'none';
    closeButton.style.display = 'inline';
});

closeButton.addEventListener('click', () => {
    navigationBar.style.display = 'none';
    closeButton.style.display = 'none';
    openButton.style.display = 'inline';
});