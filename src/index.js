const url = `http://localhost:3000/ramens`
const ramenMenu = document.querySelector('#ramen-menu')
const ramenImage = document.querySelector('#ramen-detail .detail-image')
const ramenName = document.querySelector('#ramen-detail .name')
const ramenRestaurant = document.querySelector('#ramen-detail .restaurant')
const ramenRating = document.querySelector('#rating-display')
const ramenComment = document.querySelector('#comment-display')
const newRamenForm = document.querySelector('#new-ramen')

let globalRamen = -1

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(currentRaman => {
            addToMenu(currentRaman)
        })
        showDetails(data[0])
        globalRamen = data[0].id
    })

const addToMenu = (ramen) => {
    let img = document.createElement('img')
    img.src = ramen.image
    // img.alt =
    img.id = `id${ramen.id}`
    img.addEventListener('click', () => {
        showDetails(ramen)
        globalRamen = ramen.id
    })
   ramenMenu.append(img)
}

const showDetails = (ramen) => {
    ramenRating.innerText = ramen.ramenRating
    ramenRestaurant.innerText = ramen.ramenRestaurant
    ramenName.innerText = ramen.name
    ramenImage.src = ramen.image
    ramenComment.innerText = ramen.comment
}

const addNewRamen = (e) => {
    e.preventDefault()
    let body = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value,
        image: e.target.image.value
    }

    fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
        addToMenu(body)
    })
}










