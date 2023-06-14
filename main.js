const ratingInputCard = document.querySelector('.rating-input-card')
const thankYouCard = document.querySelector('.thank-you-card')
const rantingCountDisplay = document.querySelector('.rating-count')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // get the value of the rating input
    const rating = form.rating.value

    // check if it's not an empty string
    if (!rating.trim()) {
        // change the text of the ratingCountDisplay
        rantingCountDisplay.textContent = "You didn't select a rating"
    } else {
        rantingCountDisplay.textContent = `You selected ${rating} out of 5`
    }

    // hide the rating input card
    ratingInputCard.classList.add('hidden')
    ratingInputCard.classList.remove('block')

    // show the thank you card
    thankYouCard.classList.remove('hidden')
    thankYouCard.classList.add('block')
})
