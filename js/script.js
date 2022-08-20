document.querySelector('#header-catalog-button').onclick = () => location.href = "index.html#catalog-link";

document.querySelector('.nav-logo-div').addEventListener('click', () => location.reload());

let buttonToTop = document.querySelector('.button-to-top');
buttonToTop.addEventListener('click', () => {
    window.scrollBy({
        top: -10000,
        behavior: 'smooth'})
})

window.addEventListener('scroll', function(){
    if(window.scrollY > 80){
        buttonToTop.classList.add('active');
    }
    else{
        buttonToTop.classList.remove('active');
    }
})


let span = document.querySelectorAll('.catalog-nav-span');
let count = 0;
span[count].classList.add('active');

let pages = document.querySelectorAll('.catalog-page');
let slider = document.querySelector('.catalog-slider');


let otstup = 0;

// Переключение навигации
document.querySelector('.nav-button-prev').addEventListener('click', () => {
    span[count].classList.remove('active');
    if(count == 0){
        count = 5;
    }
    count--;
    span[count].classList.add('active');
})

document.querySelector('.nav-button-next').addEventListener('click', () => {
    if (count >= 4) {
        span[count].classList.remove('active');
        count = 0;
        span[0].classList.add('active')
        return
    }
    span[count].classList.remove('active');
    count++;
    span[count].classList.add('active');
})


// Переключение слайдера
document.querySelector('.nav-button-prev').addEventListener('click', () => {
    if(otstup >= 0) otstup = -500 ;

    otstup += 100;
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.transform = `translateX(${otstup}%)`;
    } 
})

document.querySelector('.nav-button-next').addEventListener('click', () => {
    otstup -= 100;
    console.log(otstup);

    if(otstup <= -500) {
        otstup = 0 ;

    }
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.transform = `translateX(${otstup}%)`;
    }
})

document.querySelectorAll('a.ancor').forEach(link => {
    link.addEventListener('click', function(e){
        e.preventDefault();

        const href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 150;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        })
    })
})