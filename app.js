let arete = document.getElementById('arete')
let aire = document.getElementById('aire')
let perimetre = document.getElementById('perimetre')
let diagonale = document.getElementById('diagonale')
let btnReset = document.getElementById('reset')


arete.onchange = function () {
    let number = Number(arete.value)

    aire.value = number * number
    perimetre.value = 4 * number
    diagonale.value = Math.sqrt(2) * number

    areteE()
}


aire.onchange = function () {
    let number = Number(aire.value)

    let newAire = Math.sqrt(number)
    arete.value = newAire
    perimetre.value = 4 * arete.value
    diagonale.value = Math.sqrt(2) * arete.value

    aireE()
}

perimetre.onchange = function () {
    let number = Number(perimetre.value)

    let newArete = number / 4
    arete.value = newArete
    aire.value = arete.value * arete.value
    diagonale.value = Math.sqrt(2) * arete.value

    perimetreE()
}

diagonale.onchange = function () {
    let number = Number(diagonale.value)

    let newArete = number / Math.sqrt(2)
    arete.value = newArete
    aire.value = arete.value * arete.value
    perimetre.value = 4 * arete.value

    diagonaleE()
}


btnReset.onclick = function () {
    arete.value = ""
    aire.value = ""
    perimetre.value = ""
    diagonale.value = ""
    let ajout = document.querySelector('.equation');
    ajout.innerHTML = ""
}