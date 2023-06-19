const slider = document.querySelector("#slider");
var sliderSection = document.querySelectorAll(".slider__section");
var sliderSectionLast = sliderSection [sliderSection.length - 1];
var mouseSobreSlider =document.getElementById (".slider")

const btnLeft= document.querySelector (".slider__btn-left");
const btnRight= document.querySelector (".slider__btn-right");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function proximaImagen () {
    var sliderSectionFirst= document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="all .5s";
    
    setTimeout(()=>{
    slider.style.transition="none"
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft="-100%";
    },500)
}

function imagenAnterior () {
    var sliderSection = document.querySelectorAll(".slider__section");
    var sliderSectionLast = sliderSection [sliderSection.length - 1];
    slider.style.marginLeft="0%";
    slider.style.transition="all .5s";
    
    setTimeout(()=>{
    slider.style.transition="none"
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft="-100%";
    },500)
}

btnRight.addEventListener ("click",()=>{
    proximaImagen();
})

btnLeft.addEventListener ("click",()=>{
    imagenAnterior();
})

setInterval (proximaImagen, 5000);

