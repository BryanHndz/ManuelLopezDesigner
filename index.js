
//Selecting the DOM elements to work with those:

const dropmenu = document.querySelector('.menu');
const openb = document.querySelector('#open--button');
const closeb = document.querySelector('#close--button');
const watch = document.querySelector('.main__container--videodes');
const watchclose = document.querySelector('#closewatch');

const podcast = document.querySelectorAll('#podcast');
const podcastArray = [...podcast];

const mcontainer = document.querySelectorAll('#mcontainer');
const mcontainerArray = [...mcontainer];

const pplayer = document.querySelector('#podcast--player');

//Haciendo la dinámica de abrir y cerrar el menu lateral:

openb.addEventListener('click', () => {
    dropmenu.classList.add('active-onclick');
});

closeb.addEventListener('click', () => {
    dropmenu.classList.remove('active-onclick');
});

watch.addEventListener('click', () => {
    podcast.classList.add('overview');
});

watchclose.addEventListener('click', () => {
    podcast.classList.remove('overview');
});

//Asignando el event listener a su respectivo elemento:

for (let i = 0; i < mcontainerArray.length; i++) {
    mcontainerArray[i].addEventListener('click', () => {
        podcastArray[i].classList.toggle('overview');
    })
}