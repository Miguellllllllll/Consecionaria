let verificacion = ""
function register() {
    const form = document.getElementById("accessForm");

    // Simulación de registro exitoso/erróneo
    if (form.username.value && form.password.value) {
        verificacion = "true"
        ActivarNtfR(verificacion)
    } else {
        verificacion = "false"
        ActivarNtfR(verificacion)
    }
}

function login() {
    const form = document.getElementById("accessForm");

    // Simulación de logeo exitoso/erróneo
    if (form.username.value === "admin" && form.password.value === "1234") { // Ejemplo
        verificacion = "true"
        ActivarNtfIS(verificacion)
        setTimeout(()=>{
            // MODIFICAR LINK
            window.open("/pages/panelControl.html")
        },2000)
    } else {
        verificacion = "false"
        ActivarNtfIS(verificacion)
        
    }

}

let alerta = (msj)=>{
    let Ediv = document.createElement("div")
    let EdivBarra = document.createElement("div")
    Ediv.classList.add("notificacion")
    EdivBarra.classList.add("notificacionBarra")
    Ediv.innerHTML = `<span class='lets-icons--check-fill'></span> <p>${msj}</p>`
    document.body.appendChild(Ediv)
    Ediv.appendChild(EdivBarra)
    let width = 100
    let barraTiempo = setInterval(()=>{
        width--
        EdivBarra.style.width = `${width}%`
        if(width == 0){
            clearInterval(barraTiempo)
            Ediv.remove()
        } 
            
        },150)
}


let ActivarNtfIS = (vr)=>{
    switch(vr){
        case "true":
            alerta("Inicio Sesion")
            break
        case "false":
            alerta("Error de Inicio")
            break
    }
}

let ActivarNtfR = (vr)=>{
    switch(vr){
        case "true":
            alerta("Registro exitoso")
            break
        case "false":
            alerta("Error de Registro")
            break
    }
}