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


// *Переключение навигации каталог

let catalogSpan = document.querySelectorAll('#catalog-nav-span');
let ccount = 0;
catalogSpan[ccount].classList.add('active');

document.querySelector('#catalog-nav-prev').addEventListener('click', () => {
    catalogSpan[ccount].classList.remove('active');
    if(ccount == 0){
        ccount = catalogSpan.length;
    }
    ccount--;
    catalogSpan[ccount].classList.add('active');
})

document.querySelector('#catalog-nav-next').addEventListener('click', () => {
    if (ccount >= catalogSpan.length - 1) {
        catalogSpan[ccount].classList.remove('active');
        ccount = 0;
        catalogSpan[0].classList.add('active')
        return
    }
    catalogSpan[ccount].classList.remove('active');
    ccount++;
    catalogSpan[ccount].classList.add('active');
})


// *Переключение навигации отзывы

let vidgukiSpan = document.querySelectorAll('#vidguki-nav-span');
let vcount = 0;
vidgukiSpan[vcount].classList.add('active');

document.querySelector('#vidguki-nav-prev').addEventListener('click', () => {
    vidgukiSpan[vcount].classList.remove('active');
    if(vcount == 0){
        vcount = vidgukiSpan.length;
    }
    vcount--;
    vidgukiSpan[vcount].classList.add('active');
})
console.log(vidgukiSpan.length);

document.querySelector('#vidguki-nav-next').addEventListener('click', () => {
    if (vcount >= vidgukiSpan.length - 1) {
        vidgukiSpan[vcount].classList.remove('active');
        vcount = 0;
        vidgukiSpan[0].classList.add('active')
        return
    }
    vidgukiSpan[vcount].classList.remove('active');
    vcount++;
    vidgukiSpan[vcount].classList.add('active');
})


// *Переключение слайдера каталог

let cpages = document.querySelectorAll('.catalog-page');


let cotstup = 0;

document.querySelector('#catalog-nav-prev').addEventListener('click', () => {
    if(cotstup >= 0) cotstup = -cpages.length * 100 ;

    cotstup += 100;
    for (let i = 0; i < cpages.length; i++) {
        cpages[i].style.transform = `translateX(${cotstup}%)`;
    } 
})

document.querySelector('#catalog-nav-next').addEventListener('click', () => {
    cotstup -= 100;

    if(cotstup <= -cpages.length * 100) {
        cotstup = 0 ;

    }
    for (let i = 0; i < cpages.length; i++) {
        cpages[i].style.transform = `translateX(${cotstup}%)`;
    }
})

// *Переключение слайдера отзывы

let vpages = document.querySelectorAll('.vidguki-page');

let votstup = 0;

document.querySelector('#vidguki-nav-prev').addEventListener('click', () => {
    if(votstup >= 0) votstup = -vpages.length * 100 ;

    votstup += 100;
    for (let i = 0; i < vpages.length; i++) {
        vpages[i].style.transform = `translateX(${votstup}%)`;
    } 
})

document.querySelector('#vidguki-nav-next').addEventListener('click', () => {
    votstup -= 100;

    if(votstup <= -vpages.length * 100) {
        votstup = 0 ;

    }
    for (let i = 0; i < vpages.length; i++) {
        vpages[i].style.transform = `translateX(${votstup}%)`;
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

// *Подсчет символов отзыва

let symbolCounter = document.querySelector('#symbol-counter')
let vidgukiTextarea = document.querySelector('#vidguk-textarea');
let textareaValue = 0;

symbolCounter.textContent = `Symbols: ${textareaValue}`;

vidgukiTextarea.addEventListener('keyup', (event) => {
    console.log(event);

    textareaValue = vidgukiTextarea.value;
    symbolCounter.textContent = `Symbols: ${textareaValue.length}`;
})