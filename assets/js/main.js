let open = document.getElementById('open');
let close = document.getElementById('close');
let mnueborger = document.querySelector('.borgar-mnue');
let links = document.querySelectorAll('.borgar-mnue a');
let mune = document.querySelector('.mnue');
let heder = document.querySelector('header');
let Services = document.getElementById('ServicesUs');
let arrayclass = ["Home","ServicesUs","WhyUs","OurGoals","OurPortfolio","OurClient","ContactUs"];



open.onclick = mnueopen;
close.onclick=mnueclose;

function mnueopen(){
    mnueborger.classList.add('Activ');
    mnueborger.classList.add('com');
    mune.classList.add('activ');
}
function mnueclose(){
    mnueborger.classList.remove('Activ');
    mnueborger.classList.remove('com');
    mune.classList.remove('activ');
}

// document.addEventListener('DOMContentLoaded',madia);
// function madia(){
//     let qurye = window.matchMedia("(max-width:991px)");
//     if(qurye.matches){
//         mnueborger.style.transform="translateX(0px)";
//     }
// }

window.onscroll = function(){
    if(window.scrollY>=10){
        scro.style.display="flex";
        heder.classList.add('acthed');
        for(let i=0 ;i<links.length;i++){
            links[i].style.color="black";
        }
    }
    else{
        scro.style.display="none";
        heder.classList.remove('acthed');
        for(let i=0 ;i<links.length;i++){
            links[i].style.color="white";
        }
    }
}
//observar
let option ={
    rootMargin:"-300px",
}
let observ = new IntersectionObserver((intites)=>{
    intites.forEach(section =>{
        if(section.isIntersecting){
            let id =section.target.getAttribute('id');
            let link =document.querySelector(`.${id}`);
            link.classList.add('activlist');
            // actevclas(id);  // section.target.classList.add('activhed');
        }
        else{
            let id =section.target.getAttribute('id');
            let link =document.querySelector(`.${id}`);
            link.classList.remove('activlist');
        }
    })
},option);

for(let i=0 ;i<arrayclass.length;i++){
    observ.observe(document.getElementById(`${arrayclass[i]}`));
}
//footer
let swoe = document.querySelectorAll('#slid');
let list = document.querySelectorAll('.top ul');

for(let i=0 ; i<swoe.length;i++){
    swoe[i].addEventListener(('click'),()=>{
        list[i].classList.toggle('ullist');
        list[i].classList.toggle('activlink');
    })
}
///lodeing
let lode = document.querySelector('.lodeing');
window.onload = function(){
    lode.classList.add('Activlo');
}
//anmation scllor
let boxes = document.querySelectorAll('.anmation');

window.addEventListener(('scroll'),function(){
    for(let i =0 ;i<boxes.length;i++){
        if(boxes[i].getBoundingClientRect().top<window.innerHeight - 100){
            boxes[i].classList.add('anmi');
        }
        else{
            boxes[i].classList.remove('anmi');
        }
    }
});
///scroll
let scro = document.querySelector('.opensclor');
// window.onscroll=function(){
//     if(window.scrollY>=500){
//         scro.style.display="flex";
//     }else{
//         scro.style.display="none";
//     }
// }
scro.onclick = function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",
    });
}

