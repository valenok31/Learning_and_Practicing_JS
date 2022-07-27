
const eventClickTd = function(event){
    alert(event.currentTarget.innerHTML);
    alert(event.currentTarget.rowIndex);
}

a.onclick = eventClickTd;
b.onclick = eventClickTd;
