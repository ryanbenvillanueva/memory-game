/*
 * Create a list that holds all of your cards
 */
 const cards = ["fa fa-anchor", "fa fa-anchor", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bolt", "fa fa-bolt", "fa fa-bomb", "fa fa-bomb", "fa fa-cube", "fa fa-cube", "fa fa-diamond", "fa fa-diamond", "fa fa-leaf", "fa fa-leaf", "fa fa-paper-plane-o", "fa fa-paper-plane-o"];

 const shuffledCards = shuffle(cards);
/*
 * Create the list of cards dynamically and show it to the page
 */

 // The container of the cards
const deck = document.querySelector(".deck");
openedCards = [];

// Creating the cards.
shuffledCards.forEach(function(icon){
    const card = document.createElement("li");
    card.classList.add("card");
    card.innerHTML = `<i class="${icon}"</i>`;
    deck.appendChild(card);

    card.addEventListener('click', function() {
        if (!card.classList.contains("open", "show")) {
            card.classList.add("open", "show");
            openedCards.push(card);
            
        }
    });

});

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return cards;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

