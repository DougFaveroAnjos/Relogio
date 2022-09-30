const   deg = 6;
const   hr  = document.querySelector('#hr');
const   min = document.querySelector('#min');
const   sec = document.querySelector('#sec');

setInterval(() =>{
    let dia      = new Date();
    let hora     = dia.getHours() * 30;
    let minutos  = dia.getMinutes() * deg;
    let segundos = dia.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hora)+(minutos/12)}deg)`;
    min.style.transform = `rotateZ(${minutos}deg)`;
    sec.style.transform = `rotateZ(${segundos}deg)`;

})