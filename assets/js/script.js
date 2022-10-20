/* Alternador entre login e cadastro */
const login = document.getElementById('signin').addEventListener('click', turnFocusLogin);
const boxLogin = document.getElementById('login');
const register = document.getElementById('add').addEventListener('click', turnFocusRegister);
const boxRegister = document.getElementById('register');
const moreBtns = document.querySelector('.more');

(function () {
    addClick();
})();

function turnFocusLogin() {
    boxLogin.classList.add('focus');
    if (boxRegister.classList.contains('focus')) boxRegister.classList.remove('focus');
}

function turnFocusRegister() {
    boxRegister.classList.add('focus');
    if (boxLogin.classList.contains('focus')) boxLogin.classList.remove('focus');
}

/* Expansor de respostas */
function addClick(){
    moreBtns.forEach((btn) => {
        btn.addEventListener('click', seeMoreOrLess);
    });
}

function seeMoreOrLess() {
    if (this.classList.contains('less')) {
        this.setAttribute('src', './assets/img/more.svg');
        this.classList.add('more');
        this.classList.remove('less');
        return;
    }
    this.setAttribute('src', './assets/img/remove.png');
    this.classList.add('less');
    this.classList.remove('more');
}