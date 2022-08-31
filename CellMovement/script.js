let fieldPlaying = document.getElementById('fieldPlaying');
let cellSelect = fieldPlaying.querySelectorAll('div');
for (let elem of cellSelect) {
    elem.addEventListener('mouseover', selectIdBox);
}


function selectIdBox(event) {
    if (event.relatedTarget.className === 'cell') {
        console.log(event.relatedTarget)
        let a = event.target.innerHTML;
        let b = event.relatedTarget.innerHTML;
        event.target.innerHTML = event.relatedTarget.innerHTML
        event.relatedTarget.innerHTML = a;
        //[a, b] = [b, a];
    }
    event.target.style.backgroundColor = 'red';
    event.relatedTarget.style.backgroundColor = '';
    //
}