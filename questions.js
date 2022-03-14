const btn1 = document.getElementById('yesPGL');
const btn2 = document.getElementById('noPGL');
const btn3 = document.getElementById('yesIssue');
const btn17 = document.getElementById('noIssue');
const btn4 = document.getElementById('yesJoseph');
const btn5 = document.getElementById('noJoseph');
const btn6 = document.getElementById('yesNow');
const btn7 = document.getElementById('noNow');
const btn8 = document.getElementById('yesPetra');
const btn9 = document.getElementById('noPetra');
const btn10 = document.getElementById('yesMoon');
const btn11 = document.getElementById('noMoon');
const btn12 = document.getElementById('yesCap');
const btn13 = document.getElementById('noCap');
const btn14 = document.getElementById('yesBefore');
const btn15 = document.getElementById('noBefore');
const btn16 = document.getElementById('yesSpoke');
const btn18 = document.getElementById('noSpoke');

btn1.addEventListener('click', highlightMe1)
btn2.addEventListener('click', highlightMe2)
btn3.addEventListener('click', highlightMe3)
btn4.addEventListener('click', highlightMe4)
btn5.addEventListener('click', highlightMe5)
btn6.addEventListener('click', highlightMe6)
btn7.addEventListener('click', highlightMe7)
btn8.addEventListener('click', highlightMe8)
btn9.addEventListener('click', highlightMe9)
btn10.addEventListener('click', highlightMe10)
btn11.addEventListener('click', highlightMe11)
btn12.addEventListener('click', highlightMe12)
btn13.addEventListener('click', highlightMe13)
btn14.addEventListener('click', highlightMe14)
btn15.addEventListener('click', highlightMe15)
btn16.addEventListener('click', highlightMe16)
btn17.addEventListener('click', highlightMe17)
btn18.addEventListener('click', highlightMe18)

function highlightMe1(){
    btn1.classList.add('active')
}
function highlightMe2(){
    btn2.classList.add('active')
}
function highlightMe3(){
    btn3.classList.add('active')
}
function highlightMe4(){
    btn4.classList.add('active')
}
function highlightMe5(){
    btn5.classList.add('active')
}
function highlightMe6(){
    btn6.classList.add('active')
}
function highlightMe7(){
    btn7.classList.add('active')
}
function highlightMe8(){
    btn8.classList.add('active')
}
function highlightMe9(){
    btn9.classList.add('active')
}
function highlightMe10(){
    btn10.classList.add('active')
}
function highlightMe11(){
    btn11.classList.add('active')
}
function highlightMe12(){
    btn12.classList.add('active')
}
function highlightMe13(){
    btn13.classList.add('active')
}
function highlightMe14(){
    btn14.classList.add('active')
}
function highlightMe15(){
    btn15.classList.add('active')
}
function highlightMe16(){
    btn16.classList.add('active')
}
function highlightMe17(){
    btn17.classList.add('active')
}
function highlightMe18(){
    btn18.classList.add('active')
}

document.querySelector('#odds').addEventListener('click', tellMeTheOdds)

function tellMeTheOdds(){
    if(btn8.classList.contains('active')){
    document.location.href = 'results.html';
    }
    else if(btn2.classList.contains('active') && btn5.classList.contains('active')){
    document.location.href= 'results2.html';
    }
    else if(btn14.classList.contains('active') && btn16.classList.contains('active') && btn6.classList.contains('active')){
    document.location.href= 'results3.html';
    }
    else if(btn1.classList.contains('active') && btn3.classList.contains('active')  &&  btn4.classList.contains('active') &&  btn10.classList.contains('active')){
    document.location.href= 'results4.html';
    }
    else if(btn1.classList.contains('active') && btn3.classList.contains('active')  &&  btn4.classList.contains('active')){
    document.location.href= 'results4.html';
    }
    else if(btn1.classList.contains('active') && btn12.classList.contains('active')){
        document.location.href= 'results5.html';
    }
    else{
        document.location.href= 'results6.html';
    }
}