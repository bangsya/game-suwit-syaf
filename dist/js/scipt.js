import { getComp, hasil } from "./aturan.js";
import { putar } from "./animasi.js";

const pilihan = document.querySelectorAll('li img');
const tampilPlayer = document.querySelector('.player img');
const tampilComp = document.querySelector('.comp img');
const tampilHasil = document.querySelector('.hasil');
const areaPlayer = document.querySelector('.area-player');
const areaComp = document.querySelector('.area-comp');
const scorePlayer = document.getElementById('score-player');
const scoreComp = document.getElementById('score-comp');

let playerScore = 0;
let compScore = 0;

pilihan.forEach(function (pilih){
    pilih.addEventListener('click', function(){
        const comp = getComp();
        const hasilJadi = hasil(pilih.getAttribute('id'), comp);

        pilihan.forEach(function (e){
            e.classList.remove('active');
        });
        pilih.classList.add('active');
        putar();
        setTimeout(function(){
            tampilComp.setAttribute('src', `dist/img/${comp}.png`);
            tampilHasil.innerHTML= hasilJadi;
            
            if(hasilJadi == 'SERI'){
                areaPlayer.classList.add('draw');
                areaPlayer.classList.remove('win');
                areaComp.classList.add('draw');
                areaComp.classList.remove('lose');
                tampilHasil.classList.add('draw');
                tampilHasil.classList.remove('win');
                tampilHasil.classList.remove('lose');
            }
            if(hasilJadi == 'MENANG'){
                scorePlayer.innerHTML = ++playerScore;
                areaPlayer.classList.add('win');
                areaPlayer.classList.remove('draw');
                areaComp.classList.remove('draw');
                areaComp.classList.remove('lose');
                tampilHasil.classList.add('win');
                tampilHasil.classList.remove('draw');
                tampilHasil.classList.remove('lose');
            }
            if(hasilJadi == 'KALAH'){
                scoreComp.innerHTML = ++compScore;
                areaPlayer.classList.remove('win');
                areaPlayer.classList.remove('draw');
                areaComp.classList.remove('draw');
                areaComp.classList.add('lose');
                tampilHasil.classList.add('lose');
                tampilHasil.classList.remove('draw');
                tampilHasil.classList.remove('win');
            }
        }, 1000);
        tampilPlayer.setAttribute('src', pilih.getAttribute('src'));
    })
});