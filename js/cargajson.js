function cargaJson(id){
    var value = document.getElementById(id).value;

    switch (value) {
        case "1":
            jsonFile = "json/chile.json";
            break;
        case "2":
            jsonFile = "json/espana.json";
            break;
        case "3":
            jsonFile = "json/argentina.json";
            break;
        case "4":
            jsonFile = "json/mexico.json";
            break;
        default:
            console.log("Nada");
            break;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var myObJson = JSON.parse(this.responseText);
            updateContent(id, value, myObJson);
        }
    };
    xhttp.open("GET", jsonFile, true);
    xhttp.send();
}

function updateContent(pId, valor, objJson){
    switch (valor) {
        case "1":
            chile(pId, objJson);
            break;
        case "2":
            espana(pId, objJson);
            break;
        case "3":
            argentina(pId, objJson);
            break;
        case "4":
            mexico(pId, objJson);
            break;
        default:
            limpiarBtn(pId);
            break;
    }
}

function chile(pid, objJson){
    pid == "MC1" ? id = 1 : id = 13;
    for (i in objJson.participantes){
        document.getElementById(id.toString()).value = objJson.participantes[i];
        id++;
    }
}

function espana(pid, objJson){
    pid == "MC1" ? id = 1 : id = 13;
    for (i in objJson){
        document.getElementById(id.toString()).value = objJson[i];
        id++;
    }
}

function argentina(pid, objJson){
    pid == "MC1" ? id = 1 : id = 13;
    for (i in objJson.participantes){
        document.getElementById(id.toString()).value = objJson.participantes[i];
        id++;
    }
}

function mexico(pid, objJson){
    pid == "MC1" ? id = 1 : id = 13;
    var i2 = 1;
    for (i in objJson.participantes){
        document.getElementById(id.toString()).value = objJson.participantes[i][i2];
        i2++;
        id++;
    }
}

function limpiarBtn(pid){
    if (pid == "MC1"){
        id = 1;
        limit = 12;
    }
    else {
        id = 13;
        limit = 24;
    }
    for (id; id <= limit; id++){
        document.getElementById(id.toString()).value = "               ";
    }
}