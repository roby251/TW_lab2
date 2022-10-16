function calR1() {  
    calR1a();
    calR1b();
    ganadorR1();
  }  
function calR1b() {  
    var suma1b,text1b;  
    a = document.getElementById("R1P2a").value;  
    b = document.getElementById("R1P2b").value;  
    c = document.getElementById("R1P2c").value;  
    d = document.getElementById("R1P2d").value; 
    e = document.getElementById("R1P2e").value;  
    f = document.getElementById("R1P2f").value; 
    g = document.getElementById("R1P2g").value;  
    h = document.getElementById("R1P2h").value; 
    i = document.getElementById("R1P2i").value;  
    if (isNaN(a) || isNaN(b)|| isNaN(c) || isNaN(d)||isNaN(e) || isNaN(f)||isNaN(g) || isNaN(h)||isNaN(i) ) {  
        text1b = "Es necesarios introducir dos números válidos";  
    } else if(Math.max(parseInt(a),parseInt(b),parseInt(c),parseInt(d),parseInt(e),parseInt(f))>4||
            Math.min(parseInt(a),parseInt(b),parseInt(c),parseInt(d),parseInt(e),parseInt(f),parseInt(g),parseInt(h),parseInt(i))<1||
            Math.max(parseInt(g),parseInt(h),parseInt(i))>2){
        text1b="ERROR"
    }
    else {  
        //si no ponemos parseInt concatenaría x con y  
        suma1b=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e)+parseInt(f)+parseInt(g)+parseInt(h)+parseInt(i);  
        text1b= suma1b;  
    }  
    document.getElementById("sumR1b").innerHTML = text1b;  
}
function calR1a() {  
    var suma1a,text1a;  
    a = document.getElementById("R1P1a").value;  
    b = document.getElementById("R1P1b").value;  
    c = document.getElementById("R1P1c").value;  
    d = document.getElementById("R1P1d").value; 
    e = document.getElementById("R1P1e").value;  
    f = document.getElementById("R1P1f").value; 
    g = document.getElementById("R1P1g").value;  
    h = document.getElementById("R1P1h").value; 
    i = document.getElementById("R1P1i").value;  
    if (isNaN(a) || isNaN(b)|| isNaN(c) || isNaN(d)||isNaN(e) || isNaN(f)||isNaN(g) || isNaN(h)||isNaN(i) ) {  
        text1a = "Es necesarios introducir números válidos";  
    }else if(Math.max(parseInt(a),parseInt(b),parseInt(c),parseInt(d),parseInt(e),parseInt(f))>4||
            Math.min(parseInt(a),parseInt(b),parseInt(c),parseInt(d),parseInt(e),parseInt(f),parseInt(g),parseInt(h),parseInt(i))<1||
            Math.max(parseInt(g),parseInt(h),parseInt(i))>2){
        text1a="ERROR"
    }
    else {  
        suma1a=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e)+parseInt(f)+parseInt(g)+parseInt(h)+parseInt(i);  
        text1a= suma1a;  
    }  
    document.getElementById("sumR1a").innerHTML = text1a;  
}
function ganadorR1(){
    var ganadorr1,text,a,b; 
    a = parseInt(document.getElementById("lsumR1a").innerText);  
    b = parseInt(document.getElementById("lsumR1b").innerText);  
    if (a>b){
        ganadorr1=document.getElementById("R1P1").innerText;
    }
    else if(a<b){
        ganadorr1=document.getElementById("R1P2").innerText;
    }
    else if(document.getElementById("lsumR1a").innerText=="ERROR" || document.getElementById("lsumR1b").innerText=="ERROR"){
        ganadorr1="ERROR"
    }
    else{
        ganadorr1="REPLICA"
    }
    text=ganadorr1;
    document.getElementById("ganadorR1").innerHTML = text;  
}

function calR2() {  
    calR2a();
    calR2b();
    ganadorR2();
  }  
function calR2b() {  
    var suma1b,text1b;  
    a = document.getElementById("R2P2a").value;  
    b = document.getElementById("R2P2b").value;  
    c = document.getElementById("R2P2c").value;  
    d = document.getElementById("R2P2d").value; 
    e = document.getElementById("R2P2e").value;  
    f = document.getElementById("R2P2f").value; 
    g = document.getElementById("R2P2g").value;  
    h = document.getElementById("R2P2h").value; 
    i = document.getElementById("R2P2i").value;  
    if (isNaN(a) || isNaN(b)|| isNaN(c) || isNaN(d)||isNaN(e) || isNaN(f)||isNaN(g) || isNaN(h)||isNaN(i) ) {  
        text1b = "Es necesarios introducir dos números válidos";  
    } else if(Math.max(parseInt(a),parseInt(b),parseInt(c),parseInt(d),parseInt(e),parseInt(f))>4||
            Math.min(parseInt(a),parseInt(b),parseInt(c),parseInt(d),parseInt(e),parseInt(f),parseInt(g),parseInt(h),parseInt(i))<1||
            Math.max(parseInt(g),parseInt(h),parseInt(i))>2){
        text1b="ERROR"
    }
    else {  
        //si no ponemos parseInt concatenaría x con y  
        suma1b=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e)+parseInt(f)+parseInt(g)+parseInt(h)+parseInt(i);  
        text1b= suma1b;  
    }  
    document.getElementById("sumR2b").innerHTML = text1b;  
}
function calR2a() {  
    var suma1a,text1a;  
    a = document.getElementById("R2P1a").value;  
    b = document.getElementById("R2P1b").value;  
    c = document.getElementById("R2P1c").value;  
    d = document.getElementById("R2P1d").value; 
    e = document.getElementById("R2P1e").value;  
    f = document.getElementById("R2P1f").value; 
    g = document.getElementById("R2P1g").value;  
    h = document.getElementById("R2P1h").value; 
    i = document.getElementById("R2P1i").value;  
    if (isNaN(a) || isNaN(b)|| isNaN(c) || isNaN(d)||isNaN(e) || isNaN(f)||isNaN(g) || isNaN(h)||isNaN(i) ) {  
        text1a = "Es necesarios introducir números válidos";  
    }else if(Math.max(parseInt(a),parseInt(b),parseInt(c),parseInt(d),parseInt(e),parseInt(f))>4||
            Math.min(parseInt(a),parseInt(b),parseInt(c),parseInt(d),parseInt(e),parseInt(f),parseInt(g),parseInt(h),parseInt(i))<1||
            Math.max(parseInt(g),parseInt(h),parseInt(i))>2){
        text1a="ERROR"
    }
    else {  
        suma1a=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e)+parseInt(f)+parseInt(g)+parseInt(h)+parseInt(i);  
        text1a= suma1a;  
    }  
    document.getElementById("sumR2a").innerHTML = text1a;  
}
function ganadorR2(){
    var ganadorR2,text,a,b; 
    a = parseInt(document.getElementById("lsumR2a").innerText);  
    b = parseInt(document.getElementById("lsumR2b").innerText);  
    if (a>b){
        ganadorR2=document.getElementById("R2P1").innerText;
    }
    else if(a<b){
        ganadorR2=document.getElementById("R2P2").innerText;
    }
    else if(document.getElementById("lsumR2a").innerText=="ERROR" || document.getElementById("lsumR2b").innerText=="ERROR"){
        ganadorR2="ERROR"
    }
    else{
        ganadorR2="REPLICA"
    }
    text=ganadorR2;
    document.getElementById("ganadorR2").innerHTML = text;  
}
function calF(){
    var ganadorF,text,a,b; 
    a = parseInt(document.getElementById("lsumR2a").innerText)+parseInt(document.getElementById("lsumR1a").innerText);  
    b = parseInt(document.getElementById("lsumR2b").innerText)+parseInt(document.getElementById("lsumR1b").innerText); 
    if (a>b){
        ganadorF=document.getElementById("R2P1").innerText;
    }
    else if(a<b){
        ganadorF=document.getElementById("R2P2").innerText;
    }
    else if(document.getElementById("lsumR2a").innerText=="ERROR" || document.getElementById("lsumR2b").innerText=="ERROR"||
            document.getElementById("lsumR1a").innerText=="ERROR" || document.getElementById("lsumR1b").innerText=="ERROR"){
        ganadorF="ERROR"
    }
    else{
        ganadorF="REPLICA"
    }
    text=ganadorF;
    document.getElementById("ganadorF").innerHTML = text;   

}