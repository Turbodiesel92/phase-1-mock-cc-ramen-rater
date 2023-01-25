fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(ramens => showRamens(ramens))

const ramensMenu = document.querySelector('#ramen-menu')

function showRamens(ramens) {
    ramens.forEach(ramen => {
    const menuImage = document.createElement('img')
    menuImage.src = ramen.image
    ramensMenu.append(menuImage)
        menuImage.addEventListener('click', () => {
            const ramenImage = document.querySelector("#ramen-detail > img")
            ramenImage.src = ramen.image

            const ramenName = document.querySelector("#ramen-detail > h2")
            ramenName.textContent = ramen.name

            const ramenRestaurant = document.querySelector("#ramen-detail > h3")
            ramenRestaurant.textContent = ramen.restaurant

            const ramenRating = document.querySelector("#rating-display")
            ramenRating.textContent = ramen.rating

            const ramenComments = document.querySelector("#comment-display")
            ramenComments.textContent = ramen.comment

        })
    })
}

function addRamen() {
    const ramenForm = document.querySelector("#new-ramen")
    ramenForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newRamen = {
            name: event.target.name.value,
            restaurant: event.target.restaurant.value,
            image: event.target.image.value,
            rating: event.target.rating.value,
            comment: event.target['new-comment'].value
        }
        showRamens([newRamen])
        ramenForm.reset()
    })
}

addRamen()



















// function getRamen() {
//     fetch (`http://localhost:3000/ramens`)
//     .then(response => response.json())
//     .then(ramens => renderRamens(ramens))
// }

// const ramenMenu = document.querySelector('#ramen-menu')

// const ramenImage = document.querySelector('#ramen-detail > img')
// const ramenName = document.querySelector('#ramen-detail > h2')
// const ramenRes = document.querySelector('#ramen-detail > h3')
// const ramenRating = document.querySelector('#rating-display')
// const ramenComment = document.querySelector('#comment-display')

// function renderRamens(ramens) {
//    ramens.forEach(ramen => {
//     const menuImage = document.createElement('img')
//     menuImage.src = ramen.image
//     ramenMenu.append(menuImage)
//     menuImage.addEventListener('click', () =>{
//         ramenName.textContent = ramen.name
//         ramenImage.src = ramen.image
//         ramenRes.textContent = ramen.restaurant
//         ramenRating.textContent = ramen.rating
//         ramenComment.textContent = ramen.comment
//     })
// })
// }

// function postRam(){
//     const ramenForm = document.querySelector('#new-ramen')
//     ramenForm.addEventListener('submit', (event) => {
//         event.preventDefault()
//         let ramenObj = {
//             name: event.target.name.value,
//             restaurant: event.target.restaurant.value,
//             image: event.target.image.value,
//             rating: parseInt(event.target.rating.value),
//             comment: event.target['new-comment'].value
//         }
//         renderRamens([ramenObj])
//     })
// }

// postRam()

