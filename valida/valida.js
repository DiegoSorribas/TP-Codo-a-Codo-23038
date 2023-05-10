
function validaForm(){
    const nombre = document.getElementsByName("name")[0].value;
    console.log(nombre);
    const msger = document.getElementById("escrito");
    if(/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(nombre)){
        document.getElementById("escrito").innerHTML = "Campo validado";
        msger.style.color = "green";
    }else{
        document.getElementById("escrito").innerHTML = "Sólo letras y más de dos.";
        msger.style.color = "red";
    }
    
    const apellido = document.getElementsByName("apellido")[0].value;
    console.log(apellido);
    const mesger = document.getElementById("ape");
    if(/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(apellido)){
        document.getElementById("ape").innerHTML = "Campo validado";
        mesger.style.color = "green";
    }else{
        document.getElementById("ape").innerHTML = "Sólo letras y más de dos.";
        mesger.style.color = "red";
    }
    
    const email = document.getElementsByName("email")[0].value;
    console.log(email);
    const mesager = document.getElementById("meil");
    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        document.getElementById("meil").innerHTML = "Campo validado";
        mesager.style.color = "green";
    }else{
        document.getElementById("meil").innerHTML = "Dirección de mail inválida";
        mesager.style.color = "red";
    }

    const adultos = document.getElementsByName("adultos")[0].value;
    console.log(adultos);
    const msg = document.getElementById("cantAdultos");
    if (adultos>0){
        msg.innerHTML = "Campo validado";
        msg.style.color = "green";
    }else{
        msg.innerHTML = "Debe ingresar un número mayor a cero (0)";
        msg.style.color = "red";
    }

    const menores = document.getElementsByName("menores")[0].value;
    console.log(menores);
    const msge = document.getElementById("cantMenores");
    if (menores<0){
        msge.innerHTML = "Debe ingresar un número mayor o igual a cero (0)";
        msge.style.color = "red";
    }else{
        document.getElementById("cantMenores").innerHTML = "Campo validado";
        msge.style.color = "green";
    }

    /*const bodeg = document.getElementsByName("bodega")[3].value;
    console.log(bodeg);*/
    const mesagere = document.getElementById("bodego");
    if (res.bodega[0].checked == true ||
        res.bodega[1].checked == true ||
        res.bodega[2].checked == true ||
        res.bodega[3].checked == true ) {
        mesagere.innerHTML = "Bodegón elegido";
        mesagere.style.color = "green";
    }else{
        mesagere.innerHTML = "Debe seleccionar un bodegón";
        mesagere.style.color = "red";
    }

    
}

/*
function limpia(){
    var formulario = document.getElementsByid("nombre")[0].value;
    console.log(formulario);
        
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    if (formulario.nombre.value == 0){
        alert("Completa el campo nombre");
    
    };*/