// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

    // let tabs1 =
     axios
    .get('https://lambda-times-api.herokuapp.com/topics')
    .then(res=>{
        console.log('res',res)
        let topics = res.data.topics;
        const tabs = document.querySelector('.topics')
    //    let arr =[];

         topics.forEach(el=>{
            const tab =document.createElement('div')
            tab.classList.add('tab')
            tab.textContent = el;
            tabs.appendChild(tab)

            // arr.push(el)
        
        })
        // console.log(arr)
        // return arr
        
    })
    .catch(err=>{
        console.log('failed', err)
    })
  



console.log('tabs in tab component',tabs1)