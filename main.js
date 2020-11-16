///////////******************  Recuperation des elements  *************//////////////////////////////////
const distance = document.getElementById('distance');
const rm = document.getElementById('rm');
const vx = document.getElementById('vx');
const vw = document.getElementById('vw');
const fob = document.getElementById('fob');
const inputs = document.querySelectorAll('.div-colonnes-1 ul li input');
const resultXm = document.getElementById('resultXm');



///////////******************  declarations des variables *************//////////////////////////////////
let autoSave = false;
let alpha;
let xm;
let d;
let ve;
let vt;
let vp;
let fb1;
let fb2;
let tav;
let conso_L_h;
let conso_L_min;
let tsv;
let vs;
let cm;
let efuel;


///////////******************  List des eventListener  *************//////////////////////////////////

/**
 * apres chargement de la page
 */
document.addEventListener('DOMContentLoaded', function () {

    if (sessionStorage.getItem("autosave")) {
        loadData();
      }
      else{
        console.log('pas de sauvegarde');
      }
    calcule(conversion(distance,rm,vx,vw,fob));
    // read();
});

/**
 * Appuie sur la touche entrer
 */
document.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {

        calcule(conversion(distance, rm, vx, vw, fob));
        // save();
    }
});

/**
 * Quand le focus est endehors de l'input
 */
inputs.forEach(element => {
    element.addEventListener('focusout', (event) => {
        event.target.style.background = 'red';
        calcule(conversion(distance, rm, vx, vw, fob));
    });
});



function read() {
    // distance.value= sessionStorage.getItem('distance');
}

// document.addEventListener('keydown', function(e){
//     if (e.code === 'Enter') {
//  alpha = degrees_to_radians(alpha);
//  console.log(alpha);

//         save();
// resultXm.innerText = xm;
//     }
// });




function degrees_to_radians(degree) {
    var pi = Math.PI;
    return degree * (pi / 180);
}

















// document.addEventListener('click', function () {
// resultRm = document.getElementById('rm').textContent;
// resultVx = document.getElementById('vx').textContent;
//     console.log(resultRm);
//     console.log(resultVx);
//     result = Number(resultRm) - Number(resultVx);
//     console.log('resultVx:', resultVx);
//     console.log('resultRm:', resultRm);
//     console.log('result:', result);
//    document.getElementById('testq').textContent = result; 
//    document.getElementById('testq').textContent = result; 

//     console.log(degrees_to_radians(result));
//     console.log(Math.round(Math.cos(degrees_to_radians(result))));

//     document.getElementById('test1').textContent = "Alpha Ɑ :"+ result;
//     document.getElementById('test2').textContent = "Sin : "+Math.round(Math.sin(degrees_to_radians(result)));
//     document.getElementById('test3').textContent = "Cos : "+Math.round(Math.cos(degrees_to_radians(result)));
// })