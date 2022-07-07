let interval = setInterval(api, 5000)

let count = 0
const lab = document.querySelector('#labrador')
const german = document.querySelector('#german')
const poodle = document.querySelector('#poodle')
const home = document.querySelector('.home-intro')
const beagle = document.querySelector('#beagle')
const frenchie = document.querySelector('#frenchie')
const dog = [lab, german, poodle, beagle, frenchie]
const dogUrl = ['labrador','germanshepherd','poodle/standard','beagle','french/bulldog']

function api() {
    count++
    if(count === 3){
        clearInterval(interval)
        interval = null
    }
    for(let i = 0; i < dogUrl.length; i++){
        fetch(`https://dog.ceo/api/breed/${dogUrl[i]}/image/random`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            dog[i].src = data.message
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    }  
    
}


api()