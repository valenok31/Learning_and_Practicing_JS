let fieldPlaying = document.getElementById('fieldPlaying');
let cellSelect = fieldPlaying.querySelectorAll('div');
for (let elem of cellSelect) {
    elem.addEventListener('mouseover', selectIdBox);
}


function selectIdBox(event) {
    if (event.relatedTarget.className === 'cell') {
        console.log(event.relatedTarget)
        let a=event.target.innerHTML;
        event.target.innerHTML = event.relatedTarget.innerHTML
        event.relatedTarget.innerHTML = a;
        //event.target.innerHTML = 'end'
    }
    event.target.style.backgroundColor = 'red';
    event.relatedTarget.style.backgroundColor = '';
    //
}