
//Selecting the DOM elements to work with those:

const dropmenu = document.querySelector('.menu');
const openb = document.querySelector('#open--button');
const closeb = document.querySelector('#close--button');
const watch = document.querySelector('#watch');
//Haciendo la dinámica de abrir y cerrar el menu lateral:

openb.addEventListener('click', () => {
    dropmenu.classList.add('active-onclick');
});

closeb.addEventListener('click', () => {
    dropmenu.classList.remove('active-onclick');
});

