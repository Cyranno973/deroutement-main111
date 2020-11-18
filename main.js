///////////******************  Recuperation des elements  *************//////////////////////////////////
const distance = document.getElementById('distance');
const rm = document.getElementById('rm');
const vx = document.getElementById('vx');
const vw = document.getElementById('vw');
const fob = document.getElementById('fob');
const title = document.querySelector('h1');

const inputs = document.querySelectorAll('.div-colonnes-1 ul li input');
const bouton = document.getElementsByTagName('h1')[0];
const modal = document.getElementById('myModal');
const annuler = document.getElementById('annuler');
const confirmer = document.getElementById('confirmer');
const closeModal = document.querySelector('.close');


///////////******************  declarations des variables *************//////////////////////////////////
let autoSave = false;
let sin;
let cos;
let temps;
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

    if (sessionStorage.getItem("autoSaveObject")) {
        console.log('Il y a une sauvegarde');
        loadData();
    }
    else {
        console.log('pas de sauvegarde');
    }
});

/**
 * Appuie sur la touche entrer
 */
document.addEventListener('keydown', function (e) {
    let el = document.querySelector(":focus");

    if (e.code === 'Enter') {
        el.blur();
        calcule(conversion(distance, rm, vx, vw, fob));
        save();
    }
});

/**
 * Quand le focus est en dehors de l'input
 */
inputs.forEach(element => {
    element.addEventListener('focusout', (event) => {
        // event.target.style.background = 'red';
        calcule(conversion(distance, rm, vx, vw, fob));
    });

    element.addEventListener('click', function(){
        element.select();
        });
});

title.addEventListener('click', function(){
    modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
closeModal.addEventListener('click', function() {
  modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
document.addEventListener('click', function(){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}); 

confirmer.addEventListener('click', function(){
    reset();
    modal.style.display = "none";

})
annuler.addEventListener('click', function(){
    modal.style.display = "none";;
})

function degrees_to_radians(degree) {
    var pi = Math.PI;
    return degree * (pi / 180);
}


// document.addEventListener('click', function () {
// resultRm = document.getElementById('rm').textContent;
// resultVx = document.getElementById('vx').textContent;



//     result = Number(resultRm) - Number(resultVx);



//    document.getElementById('testq').textContent = result; 
//    document.getElementById('testq').textContent = result; 

//     console.log(degrees_to_radians(result));

//     console.log(Math.round(Math.cos(degrees_to_radians(result))));

//     document.getElementById('test1').textContent = "Alpha Ɑ :"+ result;
//     document.getElementById('test2').textContent = "Sin : "+Math.round(Math.sin(degrees_to_radians(result)));
//     document.getElementById('test3').textContent = "Cos : "+Math.round(Math.cos(degrees_to_radians(result)));
// })



// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
