let fieldPlaying = document.getElementById('fieldPlaying');
let cell = document.getElementById('0');
let cellSelect = fieldPlaying.querySelectorAll('div');

window.addEventListener('mousemove', selectIdBox);


function selectIdBox(event) {

    cell.innerHTML = event.offsetX + '/' + event.offsetY

    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeightDDE = document.documentElement.clientHeight;
    let pageYOffset = window.pageYOffset;
    let clientHeightDB = document.body.clientHeight;
    console.log(pageYOffset + '/' + clientHeightDDE + '/' + clientHeightDB + '/' + scrollHeight)

    if(window.pageYOffset + document.documentElement.clientHeight === document.body.clientHeight){
        let div = document.createElement('div');
        div.className = "cell";
        div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

        fieldPlaying.append(div);
    }

}

