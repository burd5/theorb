document.querySelector('.one').addEventListener('click', askQuestions)
document.querySelector('.two').addEventListener('click', askQuestions)
document.querySelector('.three').addEventListener('click', askQuestions)
document.querySelector('.four').addEventListener('click', askQuestions)
document.querySelector('.five').addEventListener('click', askQuestions)

function askQuestions(){
    document.location.href= 'questions.html';
}