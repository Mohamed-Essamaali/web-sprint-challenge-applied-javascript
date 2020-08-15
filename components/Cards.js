// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const makeCard = article=>{

    const card = document.createElement('div')
    card.classList.add('card');
    const headline = document.createElement('div');
    headline.classList.add('headline')
    const author = document.createElement('div');
    author.classList.add('author');
    const imgContainer = document.createElement('div')
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    //text content
    headline.textContent = article.headline;
    authorImg.src=article.authorPhoto;
    authorName.textContent = article.authorName

    //append elements 
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(authorName)

    //event listener
    card.addEventListener('click',e=>{
        console.log(article.headline)
    })

// console.log(card)
    return card
}

const cards = document.querySelector('.cards-container')
axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then(res=>{


    console.log('all articles ',res.data.articles)

    let articles = res.data.articles;
   console.log('Javascript article',res.data.articles.javascript)
   
   //define my articles
   let boot = res.data.articles.bootstrap;
    let java =res.data.articles.javascript;
    let jQuery = res.data.articles.jquery;
    let node = res.data.articles.node;
    let technology = res.data.articles.technology;

    //mapping throught articles 
    //bootstrap
    boot.map(el=>{
        cards.appendChild(makeCard(el))
    })

    //javascript
    java.map(el=>{
        cards.appendChild(makeCard(el))
    })

    //jQuery
    jQuery.map(el=>{
        cards.appendChild(makeCard(el))
    })

    //node
    node.map(el=>{
        cards.appendChild(makeCard(el))
    })

    //technology
    technology.map(el=>{
        cards.appendChild(makeCard(el))
    })


})
.catch(err=>{
    console.log('failed',err)
})