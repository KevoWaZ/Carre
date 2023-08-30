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
        aire.value = (number * number).toFixed(3)
        perimetre.value = (4 * number).toFixed(3)
        diagonale.value = (Math.sqrt(2) * number).toFixed(3)
    
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
        let newAire = Math.sqrt(number).toFixed(3)
        arete.value = Number(newAire).toFixed(3)
        perimetre.value = (4 * arete.value).toFixed(3)
        diagonale.value = (Math.sqrt(2) * arete.value).toFixed(3)

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
        let newArete = (number / 4).toFixed(3)
        arete.value = Number(newArete).toFixed(3)
        aire.value = (arete.value * arete.value).toFixed(3)
        diagonale.value = (Math.sqrt(2) * arete.value).toFixed(3)
    
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
        let newArete = (number / Math.sqrt(2)).toFixed(3)
        arete.value = Number(newArete).toFixed(3)
        aire.value = (arete.value * arete.value).toFixed(3)
        perimetre.value = (4 * arete.value).toFixed(3)
    
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