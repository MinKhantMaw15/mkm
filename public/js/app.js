//Porfolio
var link1 = document.querySelector('.link1');
var porfolio = document.querySelector('.porfolio');

//Skills
var link2 = document.querySelector('.link2');
var skill = document.querySelector('.skill');

//Personal details
var detailspersonal = document.querySelector('.personaldetails');
var link3 = document.querySelector('.link3')

link1.addEventListener('click', function() {
    porfolio.classList.toggle('porfolioadd');
    skill.classList.remove('skilladd');
    link1.classList.toggle('link1add');
    link2.classList.remove('link2add');
    link3.classList.remove('link3add');
    link3.classList.remove('link3add');
    detailspersonal.classList.remove('dpadd');
})

link2.addEventListener('click', function() {
    link3.classList.remove('link3add');
    detailspersonal.classList.remove('dpadd');
    skill.classList.toggle('skilladd');
    porfolio.classList.remove('porfolioadd');
    link2.classList.toggle('link2add');
    link1.classList.remove('link1add');
    link3.classList.remove('link3add');
})

link3.addEventListener('click', function() {
    link3.classList.toggle('link3add')
    detailspersonal.classList.toggle('dpadd');
    skill.classList.remove('skilladd');
    porfolio.classList.remove('porfolioadd');
    link2.classList.remove('link2add');
    link1.classList.remove('link1add');
})