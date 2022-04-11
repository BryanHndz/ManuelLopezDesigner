//Selecting the DOM elements to work with those:

const dropmenu = document.getElementById('menu');
const openb = document.getElementById('open--button');
const closeb = document.getElementById('close--button');

openb.addEventListener('click', ()=>{
    dropmenu.classList.remove('inactive');
});

closeb.addEventListener('click', ()=>{
    dropmenu.classList.add('inactive');
});