let ajout = document.querySelector('.equation')

function areteE() {
    let ajout = document.querySelector('.equation')

    let aire = document.createElement("h1")
    aire.id = "aire"
    aire.innerHTML = `\\(A = a * a\\)`
    ajout.appendChild(aire)

    let perime = document.createElement("h1")
    perime.id = "perime"
    perime.innerHTML = `\\(P = 4 * a\\)`
    ajout.appendChild(perime)

    let diagonale = document.createElement("h1")
    diagonale.id = "diagonale"
    diagonale.innerHTML = `\\(D = \\sqrt{2} * a\\)`
    ajout.appendChild(diagonale)

    MathJax.typesetPromise()
}

function aireE() {
    let ajout = document.querySelector('.equation')

    let arete = document.createElement("h1")
    arete.id = "arete"
    arete.innerHTML = `\\(a = \\sqrt{A}\\)`
    ajout.appendChild(arete)

    let perime = document.createElement("h1")
    perime.id = "perime"
    perime.innerHTML = `\\(P = 4 * a\\)`
    ajout.appendChild(perime)

    let diagonale = document.createElement("h1")
    diagonale.id = "diagonale"
    diagonale.innerHTML = `\\(D = \\sqrt{2} * a\\)`
    ajout.appendChild(diagonale)

    MathJax.typesetPromise()
}

function perimetreE() {
    let ajout = document.querySelector('.equation')

    let arete = document.createElement("h1")
    arete.id = "arete"
    arete.innerHTML = `\\(a = P / 4\\)`
    ajout.appendChild(arete)

    let aire = document.createElement("h1")
    aire.id = "aire"
    aire.innerHTML = `\\(A = a * a\\)`
    ajout.appendChild(aire)

    let diagonale = document.createElement("h1")
    diagonale.id = "diagonale"
    diagonale.innerHTML = `\\(D = \\sqrt{2} * a\\)`
    ajout.appendChild(diagonale)

    MathJax.typesetPromise()
}

function diagonaleE() {
    let ajout = document.querySelector('.equation')

    let arete = document.createElement("h1")
    arete.id = "arete"
    arete.innerHTML = `\\(a = D / \\sqrt{2}\\)`
    ajout.appendChild(arete)

    let aire = document.createElement("h1")
    aire.id = "aire"
    aire.innerHTML = `\\(A = a * a\\)`
    ajout.appendChild(aire)

    let perimetre = document.createElement("h1")
    perimetre.id = "perimetre"
    perimetre.innerHTML = `\\(P = 4 * a\\)`
    ajout.appendChild(perimetre)

    MathJax.typesetPromise()
}

