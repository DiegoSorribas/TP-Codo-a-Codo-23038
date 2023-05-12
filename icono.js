const  desplazarArriba = document.querySelector("#flecha_arriba");

desplazarArriba.addEventListener("click", () =>{
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth",

    });
}); 