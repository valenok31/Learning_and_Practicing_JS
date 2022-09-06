let input = document.getElementById('input');
let error = document.getElementById('error');

input.onblur = function () {
    if (!input.value.includes('@')) {
        error.classList.add('invalid');
        error.innerHTML = 'error. What is @?'
        input.focus();
    }
}

input.onfocus = function () {
    if (error.classList.contains('invalid')) {
        error.classList.remove('invalid');
        error.innerHTML = '';
    }
}