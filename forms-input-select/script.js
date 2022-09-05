let form=document.forms.my;

let select = form[0];

// все три строки делают одно и то же
select.options[0].selected = true;
//select.selectedIndex = 2;
//select.value = 'banana';


    console.log(Array.from(select.options));

