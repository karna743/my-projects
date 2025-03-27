let homeScore = document.getElementById("homeScore")
let guestScore = document.getElementById("guestScore")
homeCount=0
guestCount=0
function homeOne(){
    homeCount+=1
    homeScore.textContent = homeCount
}

function homeTwo(){
    homeCount+=2
    homeScore.textContent = homeCount
}

function homeThree(){
    homeCount+=3
    homeScore.textContent = homeCount
}

function guestOne(){
    guestCount+=1
    guestScore.textContent=guestCount
}

function guestTwo(){
    guestCount+=2
    guestScore.textContent=guestCount
}

function guestThree(){
    guestCount+=3
    guestScore.textContent=guestCount
}

function newGame(){
    homeCount=0
    guestCount=0
    homeScore.textContent=0
    guestScore.textContent=0
}