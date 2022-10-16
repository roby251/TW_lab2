function main(){
    var value = document.getElementById("MC1").value;

    switch (value) {
        case "1":
            jsonFile = "chile.json";
            break;
        case "2":
            jsonFile = "espana.json";
            break;
        case "3":
            jsonFile = "argentina.json";
            break;
        case "4":
            jsonFile = "mexico.json";
            break;
        default:
            console.log("Nada");
            break;
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            var myObJson = JSON.parse(this.responseText);
            updateContent();
        }
    };
    xhttp.open("GET", jsonFile, true);
    xhttp.send();
}

function updateContent(){

}

