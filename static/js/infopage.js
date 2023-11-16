// JavaScript for the info page
// Grab the info button DOM elements so listeners can be added to them later
const infoButtons = document.getElementsByTagName('li');

function changeInfoWindow(index) {
    // Change the info window to the one that was clicked
    console.log(index);
}

document.addEventListener("DOMContentLoaded", (event) => {
    for (var i = 0; i < infoButtons.length; i++) {
        btn = infoButtons[i].querySelector('a');
        btn.setAttribute('id', i);
        btn.addEventListener('click', (event) => {
            changeInfoWindow(event.target.id);
        });
    }
});