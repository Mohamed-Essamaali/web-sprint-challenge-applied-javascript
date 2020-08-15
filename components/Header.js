// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {

    const header = document.createElement('div');
    header.classList.add('header');
    const date = document.createElement('span');
    date.classList.add('date');
    const title = document.createElement('h1');
    const temp = document.createElement('span');
    temp.classList.add('temp');

     //text content
     date.textContent = 'August 14, 2020';
     title.textContent = 'Lambda & DOM'
     temp.textContent = '79°'
    //append elemnts 
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);
    
//    console.log(header)

    return header
}

const headerContainer = document.querySelector('.header-container')

headerContainer.appendChild(Header())

