// const tag = document.querySelector('h2');

// tag.innerHTML = 'this is a test';

// tag.style.color = 'red';
let pageNumber = 0;


const nextTag = document.querySelector('footer img.next');
const outputTag = document.querySelector('h2');

const next = function () {
    pageNumber = pageNumber + 1; 
}

const updateSection = function () {
    outputTag.innerHTML = pageNumber;
}

nextTag.addEventListener('click', function () {
    
    next()
    updateSection();
})