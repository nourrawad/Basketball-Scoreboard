let homeScore=document.getElementById("homeScore-el")
let guestScore=document.getElementById("guestScore-el")
let homeCount=0
let guestCount=0

function add1home(){
    homeCount += 1
    homeScore.textContent = homeCount
}
function add2home(){
    homeCount += 2
    homeScore.textContent = homeCount
}
function add3home(){
    homeCount +=3
    homeScore.textContent = homeCount
}
function add1guest(){
    guestCount += 1
    guestScore.textContent = guestCount
}
function add2guest(){
    guestCount += 2
    guestScore.textContent = guestCount
}
function add3guest(){
    guestCount += 3
    guestScore.textContent = guestCount
}