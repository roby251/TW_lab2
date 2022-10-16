function main(){
    var value = document.getElementById("MC1").value;

    switch (value) {
        case "1":
            url = "chile.json";
          break;
        case "2":
            url = "espana.json";
          break;
        case "3":
            url = "argentina.json";
          break;
        case "4":
            url = "mexico.json";
          break;
        default:
          console.log("Nada");
          break;
      }
}