/* Expansor de respostas */
const questions = document.querySelectorAll('.question');

(function () {
    questions.forEach((qst) => {
        qst.addEventListener('click', seeMoreOrLess);
    });
})();

function seeMoreOrLess() {
    var qst = this;
    var more = qst.children[0].children[1];
    var img = more.children[0];

    var ans = qst.children[1];
    if (more.classList.contains('less')) {
        img.setAttribute('src', './assets/img/more.svg');
        more.classList.add('more');
        more.classList.remove('less');
        ans.classList.remove('show-answer');
        return;
    }
    img.setAttribute('src', './assets/img/remove.png');
    more.classList.add('less');
    more.classList.remove('more');
    ans.classList.add('show-answer');
}