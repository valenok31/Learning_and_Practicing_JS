let fieldPlaying = document.getElementById('fieldPlaying');
let cellSelect = fieldPlaying.querySelectorAll('div');
for (let elem of cellSelect) {
    elem.addEventListener('click', selectIdBox);
    elem.addEventListener('mouseover', fer);
}


function selectIdBox(event) {
    event.target.dataset.about = 'true';


}

function fer(event) {
    if (event.relatedTarget.className === 'cell' && event.target.dataset.about === 'true') {
        console.log(event.relatedTarget)
        let a = event.target.innerHTML;
        event.target.innerHTML = event.relatedTarget.innerHTML
        event.relatedTarget.innerHTML = a;

    }
    event.target.style.backgroundColor = 'red';
    event.relatedTarget.style.backgroundColor = '';
    //
}