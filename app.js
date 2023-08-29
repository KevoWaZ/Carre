let arete = document.getElementById('arete')
let aire = document.getElementById('aire')
let perimetre = document.getElementById('perimetre')
let diagonale = document.getElementById('diagonale')
let btnReset = document.getElementById('reset')
let modal = document.getElementById('modal')
let Numbers = {
    arete: arete.value,
    diagonale: diagonale.value,
    perimetre: perimetre.value,
    aire: aire.value
}

arete.onchange = function () {
    let number = Number(arete.value)

    if (number <= 0) {
        arete.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        aire.value = number * number
        perimetre.value = 4 * number
        diagonale.value = Math.sqrt(2) * number
    
        updateNumbers()
        dangerToLink()
        areteE()
    }
}


aire.onchange = function () {
    let number = Number(aire.value)

    if (number <= 0) {
        aire.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        let newAire = Math.sqrt(number)
        arete.value = newAire
        perimetre.value = 4 * arete.value
        diagonale.value = Math.sqrt(2) * arete.value

        updateNumbers()
        dangerToLink()
        aireE()
    }
}

perimetre.onchange = function () {
    let number = Number(perimetre.value)

    if (number <= 0) {
        perimetre.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        let newArete = number / 4
        arete.value = newArete
        aire.value = arete.value * arete.value
        diagonale.value = Math.sqrt(2) * arete.value
    
        updateNumbers()
        dangerToLink()
        perimetreE()
    }
}

diagonale.onchange = function () {
    let number = Number(diagonale.value)

    if (number <= 0) {
        diagonale.classList.replace("is-link", "is-danger")
        modal.classList.add("is-active")
    } else {
        let newArete = number / Math.sqrt(2)
        arete.value = newArete
        aire.value = arete.value * arete.value
        perimetre.value = 4 * arete.value
    
        updateNumbers()
        dangerToLink()
        diagonaleE()
    }
}


btnReset.onclick = function () {
    arete.value = ""
    aire.value = ""
    perimetre.value = ""
    diagonale.value = ""
    let ajout = document.querySelector('.equation');
    ajout.innerHTML = ""
    updateNumbers()
    dangerToLink()
}

function dangerToLink() {
    arete.classList.replace("is-danger", "is-link")
    perimetre.classList.replace("is-danger", "is-link")
    aire.classList.replace("is-danger", "is-link")
    diagonale.classList.replace("is-danger", "is-link")
}

function updateNumbers() {
    Numbers.arete = arete.value
    Numbers.diagonale = diagonale.value
    Numbers.perimetre = perimetre.value
    Numbers.aire = aire.value
}