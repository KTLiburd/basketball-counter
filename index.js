// Variables //
let scoreHome = 0
let scoreGuest = 0
let homePoint = document.getElementById("homeScore")
let guestPoint = document.getElementById("guestScore")

// Home Score //
function addOneHome() {
    scoreHome += 1
    homePoint.textContent = scoreHome
}
function addTwoHome() {
    scoreHome += 2
    homePoint.textContent = scoreHome
}
function addThreeHome() {
    scoreHome += 3
    homePoint.textContent = scoreHome
}

// Guest Score //
function addOneGuest() {
    scoreGuest += 1
    guestPoint.textContent = scoreGuest
}
function addTwoGuest() {
    scoreGuest += 2
    guestPoint.textContent = scoreGuest
}
function addThreeGuest() {
    scoreGuest += 3
    guestPoint.textContent = scoreGuest
}
