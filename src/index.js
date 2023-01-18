const url = `http://localhost:3000/ramens`
const ramenMenu = document.querySelector('#ramen-menu')
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
    img.id = `id${ramen.id}`
    img.addEventListener('click', () => {
        showDetails(ramen)
        globalRamen = ramen.id
    })
    ramenMenu.append(img)
}

const showDetails = (ramen) => {
    const ramenRating = document.querySelector('#rating-display')
    ramenRating.innerText = ramen.ramenRating

    const ramenRestaurant = document.querySelector('#ramen-detail .restaurant')
    ramenRestaurant.innerText = ramen.ramenRestaurant

    const ramenName = document.querySelector('#ramen-detail .name')
    ramenName.innerText = ramen.name

    const ramenImage = document.querySelector('#ramen-detail .detail-image')
    ramenImage.src = ramen.image

    const ramenComment = document.querySelector('#comment-display')
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
    addToMenu(body)
}









