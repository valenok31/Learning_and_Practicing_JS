let fieldPlaying = document.getElementById('fieldPlaying');
let cellSelect = fieldPlaying.querySelectorAll('div');
let unblocked = false;
for (let elem of cellSelect) {
    elem.addEventListener('click', selectIdBox);
    elem.addEventListener('mouseover', fer);
}

function selectIdBox(event) {
    unblocked = !unblocked;
    unblocked ? event.target.style.backgroundColor = 'red' : event.target.style.backgroundColor = '';
}

function fer(event) {
    console.log(unblocked)
    if (event.relatedTarget.className === 'cell' && unblocked) {
        let a = event.target.innerHTML;
        event.target.innerHTML = event.relatedTarget.innerHTML
        event.relatedTarget.innerHTML = a;
        event.target.style.backgroundColor = 'red';
        event.relatedTarget.style.backgroundColor = '';
    }
}