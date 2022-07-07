setInterval(api, 5000)
setInterval(img, 3000)

const lab = document.querySelector('#labrador')
const german = document.querySelector('#german')
const poodle = document.querySelector('#poodle')
const home = document.querySelector('.home-intro')
const beagle = document.querySelector('#beagle')
const frenchie = document.querySelector('#frenchie')
const dog = [lab, german, poodle, beagle, frenchie]
const dogUrl = ['Labrador','Germanshepherd','Standard-Poodle','Beagle','French-Bulldog']


function api() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        home.style.backgroundImage = data.message
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function img() {
    for(let i = 0; i < dog.length; i++) {
        fetch(`https://dog.ceo/api/breeds/${dogUrl[i]}/image/random`)
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
img()