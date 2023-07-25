let arete = document.getElementById('arete')
let aire = document.getElementById('aire')
let perimetre = document.getElementById('perimetre')
let diagonale = document.getElementById('diagonale')
let button = document.querySelector('button')


arete.onchange = function () {
    let number = Number(arete.value)

    aire.value = number * number
    perimetre.value = 4 * number
    diagonale.value = Math.sqrt(2) * number
}


aire.onchange = function () {
    let number = Number(aire.value)

    let newAire = Math.sqrt(number)
    arete.value = newAire
    perimetre.value = 4 * newAire
    diagonale.value = Math.sqrt(2) * newAire

}

perimetre.onchange = function () {
    let number = Number(perimetre.value)

    let newArete = number / 4
    arete.value = newArete
    aire.value = newArete * newArete
    diagonale.value = Math.sqrt(2) * newArete
}

diagonale.onchange = function () {
    let number = Number(diagonale.value)

    let newArete = number / Math.sqrt(2)
    arete.value = newArete
    aire.value = newArete * newArete
    perimetre.value = 4 * newArete
}
