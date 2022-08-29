let fieldPlaying = document.getElementById('fieldPlaying');
let cellSelect = fieldPlaying.querySelectorAll('div');
for (let elem of cellSelect) {
elem.addEventListener('mouseover', selectIdBox);
}


function selectIdBox(event) {
    event.target.style.backgroundColor = 'red';
    event.relatedTarget.style.backgroundColor = '';
}