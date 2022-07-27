table.onclick = ()=>{

    for (let elem of table.rows[1].cells) {
        alert(elem.innerHTML); // DIV, UL, DIV, SCRIPT
    }

}
