document.getElementById('input-field').addEventListener('keyup', function (event) {
    const inputValue = event.target.value;
    const deleteButton = document.getElementById('delete-btn');
    if (inputValue === 'delete') {
        deleteButton.removeAttribute('disabled');
    }
    else {
        deleteButton.setAttribute('disabled', true);
    }
})


document.getElementById('delete-btn').addEventListener('click', function () {
    const text = document.getElementById('text');
    text.style.display = 'none'
})