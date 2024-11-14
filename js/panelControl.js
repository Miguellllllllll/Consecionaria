let main = document.getElementById("seccion_main")

let iCar = document.getElementById("icon-car")

let iMess = document.getElementById("icon-message")

let iUsers = document.getElementById("icon-users")

let iBuys = document.getElementById("icon-buys")

// Evento para crear el apartado de autos
iCar.addEventListener("click", ()=>{
        view_Card()
        
    })

// Funcion para crear las cartas de los autos
let view_Card = ()=>{
    main.innerHTML = " "
        main.classList.add("estilos_seccion_card")
        main.innerHTML = `
        <div class="tarjeta_general">
            <figure class="imagen_car imagen_car_add">
                <span class="zondicons--add-solid"></span>
            </figure>
            <div class="grupo_botones">
                <button id="agregar-card" onclick="add_card()">
                    Agregar
                </button>
            </div>
        </div>`
}

// Evento para crear el formulario
let add_card = ()=>{
    main.classList.remove("estilos_seccion_card")
    main.style.position = "relative"
    main.innerHTML = `<form method="get" action="#" class="box_add_card" id="formulario">
            <span class="carbon--close-filled close" onclick="cerrarForm()"></span>
            <input type="text" placeholder="Nombre del auto" name="nombre" required id="nombre">
            <input type="file" required  name="imagen" accept="image/webp" id="imagen" onclick="cambiarVistaArchivo()" >
            <textarea maxlength="250" placeholder="Escribe la descripcion aqui: " name="desc" required id="desc"></textarea>
            <input type="text" required  name="cant" placeholder="Cantidad:" id="cant">
            <input type="text" required  placeholder="Precio c/u:" maxlength="7" name="precio" id="precio">
            <button type="submit" id="btn-guardar" onclick="VerificarDatos()">
                Guardar
            </button>
        </form>`
    
}
// Cerrar el formulario de agregar autos
let cerrarForm = ()=>{
    main.style.removeProperty("position")
    view_Card()
}



let VerificarDatos = ()=>{
    let formulario = document.getElementById("formulario")

    formulario.addEventListener("submit",(evento)=>{
        const nombre = document.getElementById("nombre")
        const imagen = document.getElementById("imagen")
        const desc = document.getElementById("desc")
        const cant = document.getElementById("cant")
        const precio = document.getElementById("precio")

        parseInt(cant)
        parseInt(precio)

        if(nombre.value != "" && imagen.value != "" && desc.value != "" && cant.value >= 1 && precio.value >= 1){
            // Scrip cuando esta correcto
        }
        else{
            evento.preventDefault()
        }
    })
}

let cambiarVistaArchivo = ()=>{
    // Evento que resetea el valor del input tipo file
    const dt = document.getElementById("imagen")
    dt.addEventListener("click",()=>{
        dt.value = ""
    })
    // Evento que se ejecuta cuando se agrega un archivo al input file
    dt.addEventListener("change", (e)=>{
        const archivo = e.target.files
        const nmArchivo = archivo[0].name
        if(nmArchivo != ""){
            let noti = document.createElement("div")
            noti.classList.add("notificacionCheck")
            noti.innerHTML = `<span class="icon-park-solid--check-one"></span>`
            main.appendChild(noti)
            setTimeout(()=>{
                noti.remove()
            },2000)
        }
        // agregar la notificacion de correcto
    })

}

iMess.addEventListener("click",()=>{
    main.innerHTML = " "
})

iUsers.addEventListener("click",()=>{
    main.innerHTML = " "
})

iBuys.addEventListener("click",()=>{
    main.innerHTML = " "
})