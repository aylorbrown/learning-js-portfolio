
// this is the data for holding which page we're on 
let pageNumber = 0;

//have the contents for these pages
const pages = [
    { copy: 'a NYC-based developer/designer'}, 
    { copy: 'a lover of public transportation'}, 
    {copy: 'her dog <a href = "https://instagram.com/dingodexter">Dexter\'s</a> biggest fan'}, 
    {copy: 'letting you <a href="pdf.pdf"> download her PDF</a>'}

]

//pick the revelant tags 
const nextTag = document.querySelector('footer img.next');
const previousTag = document.querySelector('footer img.prev');
const outputTag = document.querySelector('h2');

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

// this will update the sections content and style
const updateSection = function () {
    outputTag.innerHTML = pages[pageNumber].copy;
}

// on click of nextTag, run this
nextTag.addEventListener('click', function () {
    next()
})

// on click of previousTag, run this
previousTag.addEventListener('click', function () {
    previous();
})

