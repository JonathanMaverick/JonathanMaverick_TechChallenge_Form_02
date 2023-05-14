const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const femaleInput = document.getElementById('female');
const maleInput = document.getElementById('male');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let flag = 1;

    if (nameInput.value.trim() === '') {
        setErrorFor(nameInput, 'Name is required');
        flag = 0;
    } else {
        setSuccessFor(nameInput);
    }

    if (emailInput.value.trim() === '') {
        setErrorFor(emailInput, 'Email is required');
        flag = 0;
    } else {
        setSuccessFor(emailInput);
    }

    if (!femaleInput.checked && !maleInput.checked) {
        setErrorFor(femaleInput.parentElement.parentElement, 'Gender is Required')
        flag = 0;
    } else {
        setSuccessFor(femaleInput.parentElement.parentElement)
    }

    if (flag) {
        form.submit();
    }
});

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');
    input.classList.add('error');
    errorMessage.innerText = message;
    errorMessage.classList.add('active');
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector('.error-message');
    input.classList.remove('error');
    errorMessage.classList.remove('active');
}
