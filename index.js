
//Selecting the DOM elements to work with those:

const dropmenu = document.getElementById('menu');
const openb = document.getElementById('open--button');
const closeb = document.getElementById('close--button');

//Haciendo la dinámica de abrir y cerrar el menu lateral:

openb.addEventListener('click', () => {
    dropmenu.classList.add('active-onclick');
});

closeb.addEventListener('click', () => {
    dropmenu.classList.remove('active-onclick');
});
