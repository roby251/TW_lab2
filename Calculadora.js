function calR1() {  
    var a,b,c,d,e,f,g,h,i,suma,text;  
    a = document.getElementById("P1a1").value;  
    b = document.getElementById("P1a2").value;  
    c = document.getElementById("P1a3").value;  
    d = document.getElementById("P1a4").value; 
    e = document.getElementById("P1a5").value;  
    f = document.getElementById("P1a6").value; 
    g = document.getElementById("P1a7").value;  
    h = document.getElementById("P1a8").value; 
    i = document.getElementById("P1a9").value;  
    if (isNaN(a) || isNaN(b)|| isNaN(c) || isNaN(d)||isNaN(e) || isNaN(f)||isNaN(g) || isNaN(h)||isNaN(i) ) {  
      text = "Es necesarios introducir dos números válidos";  
    } else {  
      //si no ponemos parseFloat concatenaría x con y  
      suma=parseFloat(a)+parseFloat(b)+parseFloat(c)+parseFloat(d)+parseFloat(e)+parseFloat(f)+parseFloat(g)+parseFloat(h)+parseFloat(i);  
      text= suma;  
    }  
    document.getElementById("sumR1").innerHTML = text;  
  }  