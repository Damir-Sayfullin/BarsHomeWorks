let list = document.getElementById('list');
let button = document.getElementById('button');
let input = document.getElementById('input');
button.disabled = true;

button.addEventListener('click', function() {
    let li = document.createElement('li');
    li.innerText = input.value;
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', checkboxChange);
    li.prepend(checkbox);
    list.append(li);
    input.value = '';
    button.disabled = true;
})

input.addEventListener('input', function() {
    if (input.value.length > 0) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
})

function checkboxChange() {
    if (this.checked) {
        this.parentNode.className = 'checked';
    } else {
        this.parentNode.className = '';
    }
}