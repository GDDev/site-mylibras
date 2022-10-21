/* Alternador entre login e cadastro */
const login = document.getElementById('signin').addEventListener('click', turnFocusLogin);
const boxLogin = document.getElementById('login');
const register = document.getElementById('add').addEventListener('click', turnFocusRegister);
const boxRegister = document.getElementById('register');

function turnFocusLogin() {
    boxLogin.classList.add('focus');
    if (boxRegister.classList.contains('focus')) boxRegister.classList.remove('focus');
}

function turnFocusRegister() {
    boxRegister.classList.add('focus');
    if (boxLogin.classList.contains('focus')) boxLogin.classList.remove('focus');
}