setInterval(api, 5000)

function api() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        document.querySelector('.home-intro').style.backgroundImage = "url('img/lab.jpg')"
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

api()