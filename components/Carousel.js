/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const createCarousel = ()=>{
  //initialize index
  let i = 0;
  //create elements
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');
  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  const carouselImg = document.createElement('img');

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button')
  // rightButton.textContent = 'Right'

  //add content to the elements
  let imgAddress = ['https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg',
                    'https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg',
                    'https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg',
                    'https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg']

  
  carouselImg.src = imgAddress[i];//default carousel image

  //function moving to the right
     const moveRight = ()=>{
      if(i===3){
        i=0;
      }
      else{
        i++;
      }
      carouselImg.src=imgAddress[i]
      carouselImg.style.display='block'
    }
    

    //function to move left by decrementing the index
    const moveLeft = ()=>{
      if(i===0){
        i=3;
      }
      else{
        i--;
      }
      carouselImg.src=imgAddress[i]
      carouselImg.style.display='block'
    }

  //append elements
  carousel.appendChild(leftButton)
  carousel.appendChild( carouselImg)
  carousel.appendChild(rightButton)

  //event listener
  rightButton.addEventListener('click',()=>{
      moveRight();
  })

  leftButton.addEventListener('click',()=>{
    moveLeft();
})
  


  return carousel
  
}
const carousel = document.querySelector('.carousel-container')
carousel.appendChild(createCarousel())
