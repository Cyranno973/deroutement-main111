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
     console.log(objet);
    fb1 = 0.55;
    vp = 110;
    alpha = (objet.rm) - (objet.vx);
    xm = objet.vw * fb1;
    d = xm * Math.sin(alpha);
    cm = objet.rm + d;
    ve = objet.vw * Math.cos(alpha);
    vt = objet.vw * Math.sin(alpha);  //const vt = vw+*sin(alpha)
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
    document.getElementById('alpha').textContent = alpha;
    document.getElementById('xm').textContent = xm;
    document.getElementById('distance').textContent = distance;
    document.getElementById('ve').textContent = ve;
    document.getElementById('vt').textContent = vt;
    document.getElementById('vp').textContent = vp;
    document.getElementById('fb1').textContent = fb1;
    document.getElementById('fb2').textContent = fb2;
    document.getElementById('tsv').textContent = tsv;
    document.getElementById('conLH').textContent = conso_L_h;
    document.getElementById('conLM').textContent = conso_L_min;
    document.getElementById('tav').textContent = tav;
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

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

function loadData() {
    const data = JSON.parse(sessionStorage.getItem('autoSaveObject'));
    // console.log(data);
    calcule(data);
}