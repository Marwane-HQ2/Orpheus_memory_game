document.addEventListener('DOMContentLoaded', () => {
    const CARDS = [
        {
            name: "1",
            img: "assets/nest.png"
        },
        {
            name: "2",
            img: "assets/pcb.png"
        },
        {
            name: "3",
            img: "assets/rummage.png"
        },
        {
            name: "4",
            img: "assets/sledding.png"
        },
        {
            name: "5",
            img: "assets/sprig.png"
        },
        {
            name: "6",
            img: "assets/arcade.png"
        },
        {
            name: "1",
            img: "assets/nest.png"
        },
        {
            name: "2",
            img: "assets/pcb.png"
        },
        {
            name: "3",
            img: "assets/rummage.png"
        },
        {
            name: "4",
            img: "assets/sledding.png"
        },
        {
            name: "5",
            img: "assets/sprig.png"
        },
        {
            name: "6",
            img: "assets/arcade.png"
        }
    ]
    CARDS.sort(() => 0.5 - Math.random())

    const BOARD = document.querySelector(".board")
    const RESULT = document.querySelector("#score")
    const PLACEHOLDER = "assets/logo_placeholder.png"
    const GRID_AREAS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]

    function createBoard() {
        for (let i=0; i< CARDS.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', PLACEHOLDER)
            card.setAttribute('data-id', i)            
            card.addEventListener("click", flipCard)
            card.style.gridArea = GRID_AREAS[i]
            BOARD.appendChild(card)
        }
    }
    createBoard()

    let cardsClicked = []
    let cardsClickedId = []
    let cardMatched = []

    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsClicked.push(CARDS[cardId].name)
        cardsClickedId.push(cardId)
        this.setAttribute('src', CARDS[cardId].img)
        if (cardsClicked.length == 2) {
            setTimeout(checkForMatch, 500)
            document.getElementById('moves').innerHTML = Number(document.getElementById('moves').innerHTML) + 1
            console.log(cardMatched.length)
            console.log(CARDS.length)
            console.log(cardMatched)
        }
    }

    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const firstCard = cardsClickedId[0]
        const secondCard = cardsClickedId[1]

        if (firstCard === secondCard) {
            cards[firstCard].setAttribute('src', PLACEHOLDER)
            cards[secondCard].setAttribute('src', PLACEHOLDER)
            alert('You have clicked the same image!')
        } 
        else if (cardsClicked[0] === cardsClicked[1]) {
            cards[firstCard].style.opacity = 0.3
            cards[secondCard].style.opacity = 0.3
            cardMatched.push(cardsClicked)

            cards[firstCard].removeEventListener('click', flipCard)
            cards[secondCard].removeEventListener('click', flipCard)

            RESULT.innerHTML = cardMatched.length
            if (cardMatched.length == CARDS.length/2) {
                alert("Congratulation ! You matched all the card together !")
            }
        } 
        else {
            cards[firstCard].setAttribute('src', PLACEHOLDER)
            cards[secondCard].setAttribute('src', PLACEHOLDER)
        }
        cardsClicked = []
        cardsClickedId = []
    }
})