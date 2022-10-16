function main(){
    var value = document.getElementById("MC1").value;

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
            updateContent(value, myObJson);
        }
    };
    xhttp.open("GET", jsonFile, true);
    xhttp.send();
}

function updateContent(valor, objJson){
    switch (valor) {
        case "1":
            chile(objJson);
            break;
        case "2":
            espana(objJson);
            break;
        case "3":
            argentina(objJson);
            break;
        case "4":
            mexico(objJson);
            break;
        default:
            console.log("Nada");
            break;
    }
}

function chile(objJson){
    var id = 1;
    for (i in objJson.participantes){
        document.getElementById(id.toString()).value = objJson.participantes[i];
        id++;
    }
}

function espana(objJson){
    var id = 1;
    for (i in objJson){
        document.getElementById(id.toString()).value = objJson[i];
        id++;
    }
}

function argentina(objJson){
    var id = 1;
    for (i in objJson.participantes){
        document.getElementById(id.toString()).value = objJson.participantes[i];
        id++;
    }
}

function mexico(objJson){
    var id = 1;
    for (i in objJson.participantes){
        document.getElementById(id.toString()).value = objJson.participantes[i][i];
        id++;
    }
}
