function conversion(distance, rm, vx, vw, fob) {
    let monObjet = new Object();
    monObjet.distance = Number(distance.value);
    monObjet.rm = Number(rm.value);
    monObjet.vx = Number(vx.value);
    monObjet.vw = Number(vw.value);
    monObjet.fob = Number(fob.value);
    return monObjet;
}


function calcule(objet) {
    // fb1 = 0.55;
    
    vp = 110;
    fb1 = Math.round(60/vp*100)/100;
    conso_L_h = 20;
    alpha = (objet.rm) - (objet.vx);
    console.log('vx :'+objet.vx);
    console.log(vx >= rm );
    if (vx >= objet.rm || vx < (objet.rm-180)) {
        alpha = alpha * 1;
        console.log(alpha+"positif");
    } else {
        alpha = alpha * (-1);
        console.log(alpha+"negatif");
    }
    xm = objet.vw * fb1;
    // xm = 8.3;
    d = xm * Math.sin(degrees_to_radians(alpha));
    cm = objet.rm + d;
    ve = objet.vw * Math.cos(degrees_to_radians(alpha));
    vt = objet.vw * Math.sin(degrees_to_radians(alpha));  
    vs = vp - ve;
    fb2 = 60 / vs;
    tav = fb2 * objet.distance;
    tsv = fb1 * objet.distance;
    conso_L_min = (conso_L_h) / 60
    efuel = tav * (conso_L_min);
    save();
    affichage();
}

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = Math.round(num % 60);

   return hours + ":" + minutes;         
}

function affichage() {
    document.getElementById('cm').value = Math.round(cm);
    document.getElementById('vs').value = Math.round(vs);
    document.getElementById('tav').value = time_convert(tav);
    console.log(time_convert(tav));
    document.getElementById('efuel').value = Math.round(efuel);
    document.querySelector('.two #alpha span').textContent = alpha;
    document.querySelector('.two #xm span').textContent = xm;
    document.querySelector('.two #aDistance span').textContent = Math.round(d*100)/100;
    document.querySelector('.two #ve span').textContent = Math.round(ve*100)/100;
    document.querySelector('.two #vt span').textContent = Math.round(vt*100)/100;
    document.querySelector('.two #vp span').textContent = vp;
    document.querySelector('.two #fb1 span').textContent = fb1;
    document.querySelector('.two #fb2 span').textContent = Math.round(fb2*100)/100;
    document.querySelector('.two #tsv span').textContent =  Math.round(tsv*100)/100;
    document.querySelector('.two #conLH span').textContent = Math.round(conso_L_h*100)/100;
    document.querySelector('.two #conLM span').textContent = Math.round(conso_L_min*100)/100;
    console.log('alpha = '+alpha);
}

function save() {
    const autoSaveObject = {
        autoSave: true,
        autoSave: autoSave,
        distance: distance.value,
        rm: rm.value,
        vx: vx.value,
        vw: vw.value,
        fob: fob.value,
    }
    sessionStorage.setItem("autoSaveObject", JSON.stringify(autoSaveObject));
}



function loadData() {
    const data = JSON.parse(sessionStorage.getItem('autoSaveObject'));

    const dataObjet = {  
    distance: document.getElementById('distance').value = Number(data.distance),
    rm: document.getElementById('rm').value = Number(data.rm),
    vx: document.getElementById('vx').value = Number(data.vx),
    vw: document.getElementById('vw').value = Number(data.vw),
    fob: document.getElementById('fob').value = Number(data.fob),
    }
    calcule(dataObjet)
}

function reset(){
    const allInputs = document.querySelectorAll('.container-colonnes ul input');
    const allSpan = document.querySelectorAll('.two ul li div span');

    allInputs.forEach(input => {
        input.value = "";
    });

    allSpan.forEach(span => {
        span.innerHTML = "";
    });

    sessionStorage.removeItem("autoSaveObject");
}