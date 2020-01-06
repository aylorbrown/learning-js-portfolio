
// this is the data for holding which page we're on 
let pageNumber = 0;

//have the contents for these pages
const pages = [
    { copy: 'a NYC-based developer/designer', background: 'rgb(203, 169, 175)', circle: 'rgb(143, 165, 118)' }, 
    { copy: 'a lover of public transportation', background: 'rgb(84, 135, 169)', circle: 'orange'}, 
    { copy: 'looking for a job Summer/Fall 2020', background: 'rgb(220, 179, 89)', circle: 'blue'}, 
    { copy: 'letting you <a href="pdf.pdf"> download her PDF</a>', background: 'rgb(203, 237, 208)', circle: 'black'}

]

//pick the revelant tags 
const nextTag = document.querySelector('footer img.next');
const previousTag = document.querySelector('footer img.prev');
const randomTag = document.querySelector('footer img.random');
const outputTag = document.querySelector('h2');
const circleTag = document.querySelector('.circle');
const bodyTag = document.querySelector('body');

//make a next function to increase the page number 
const next = function () {
    pageNumber = pageNumber + 1; 

    if (pageNumber > pages.length - 1) {
        pageNumber = 0;
    }
    updateSection();
}


// make a precious function to decrease the pageNumber 
const previous = function () {
    pageNumber = pageNumber - 1; 

    if (pageNumber < 0) {
        pageNumber = pages.length - 1;
    }
    updateSection();
}

// pick a random slide 
const random = function () {
    pageNumber = Math.floor(Math.random() * pages.length)

    updateSection();
}




// this will update the sections content and style
const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy;
    circleTag.style.backgroundColor = pages[pageNumber].circle;
    bodyTag.style.backgroundColor = pages[pageNumber].background;
}

// on click of nextTag, run this
nextTag.addEventListener('click', function () {
    next()
})

// on click of previousTag, run this
previousTag.addEventListener('click', function () {
    previous();
})

// on click of randomTag, run this 
randomTag.addEventListener('click', function () {
    random();
})

// when a user presses a key, check for arrow left or right 
// and do next or previous correctly

document.addEventListener('keyup', function (event) {
    console.log(event);

    // if the key being pressed is arrowRight
    if (event.key == 'ArrowRight') {
        next()
    }  else if (event.key == 'ArrowLeft') {
        previous();
    }
    
})

// document.addEventListener('keydown', function () {
//     previous();
// })