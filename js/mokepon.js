function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let spanMascotaJugador = document.getElementById("mascotaJugador")
    
    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else {
        alert("SELECCIONA UNA MASCOTA")
        }
        
        seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascotaEnemigo")

    if (ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "HIPODOGE"
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "CAPIPEPO"
    } else {
        spanMascotaEnemigo.innerHTML = "RATIGUEYA"
    } 
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)
