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
    fb1 = 0.55;
    vp = 110;
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
    xm = 8.3;
    d = xm * Math.round(Math.sin(degrees_to_radians(alpha))*100)/100;
    cm = objet.rm + d;
    ve = objet.vw * Math.round(Math.cos(degrees_to_radians(alpha))*100)/100;
    vt = objet.vw * Math.round(Math.sin(degrees_to_radians(alpha))*100)/100;  
    vs = vp - ve;
    fb2 = 60 / vs;
    tav = fb2 * objet.distance;
    tsv = fb1 * objet.distance;
    conso_L_h = 20;
    conso_L_min = (conso_L_h) / 60;
    efuel = tav * (conso_L_min);
    save();
    affichage();
}

function affichage() {
    document.getElementById('cm').value = cm;
    document.getElementById('vs').value = vs;
    document.getElementById('tav').value = tav;
    document.getElementById('efuel').value = efuel;
    document.querySelector('.two #alpha span').textContent = alpha;
    document.querySelector('.two #xm span').textContent = xm;
    document.querySelector('.two #aDistance span').textContent = d;
    document.querySelector('.two #ve span').textContent = ve;
    document.querySelector('.two #vt span').textContent = vt;
    document.querySelector('.two #vp span').textContent = vp;
    document.querySelector('.two #fb1 span').textContent = fb1;
    document.querySelector('.two #fb2 span').textContent = fb2;
    document.querySelector('.two #tsv span').textContent = tsv;
    document.querySelector('.two #conLH span').textContent = conso_L_h;
    document.querySelector('.two #conLM span').textContent = conso_L_min;
    document.querySelector('.two #tav span').textContent = tav;

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