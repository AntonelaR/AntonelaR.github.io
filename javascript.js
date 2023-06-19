var desplegarMenu = document.getElementById("desplegar");
var contraerMenu = document.getElementById("contraer");
var mouseSobreProductos = document.getElementById("productos");
var mouseSobreDesplegable1=document.getElementById("desplegable1");
var btnHamburguesa= document.getElementById("botonHamburguesa");


btnHamburguesa.addEventListener("click",()=>{
    var posicionMenuHamburguesa = document.getElementById("menuHamburguesa").style.left;
    if(posicionMenuHamburguesa<"-200em"){
    document.getElementById("lineaSuperior").style.transform="rotate(60deg)";
    document.getElementById("lineaSuperior").style.boxShadow="none";
    document.getElementById("lineaSuperior").style.top=".5em";
    document.getElementById("lineaInferior").style.transform="rotate(-60deg)";
    document.getElementById("menuHamburguesa").style.left="-2em";
    }else {
    document.getElementById("lineaSuperior").style.transform="rotate(0deg)";
    document.getElementById("lineaSuperior").style.boxShadow="rgba(44, 88, 90, 0.973) 0 1.2em";
    document.getElementById("lineaSuperior").style.top="0em";
    document.getElementById("lineaInferior").style.transform="rotate(0deg)";
    document.getElementById("menuHamburguesa").style.left="-198em";
    };
});

mouseSobreDesplegable1.addEventListener("mouseover",()=>{
    document.getElementById("niño").style.left="-28vw"
    document.getElementById("niña").style.left="20vw"
    document.getElementById("invierno").style.left="20vw"
});
mouseSobreProductos.addEventListener("mouseover",()=>{
    document.getElementById("niño").style.left="-28vw"
    document.getElementById("niña").style.left="20vw"
    document.getElementById("invierno").style.left="20vw"
});

mouseSobreProductos.addEventListener("mouseout",()=>{
    document.getElementById("niño").style.left="0vw"
    document.getElementById("niña").style.left="0vw"
    document.getElementById("invierno").style.left="0vw"
});

desplegarMenu.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="0em";
    document.getElementById("desplegable").style.opacity="1";
    document.getElementById("desplegar").style.display="none";
    document.getElementById("contraer").style.display="block";
});
contraerMenu.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="-1em";
    document.getElementById("desplegable").style.opacity="0";
    document.getElementById("desplegar").style.display="block";
    document.getElementById("contraer").style.display="none";
});

