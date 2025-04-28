const divContainer = document.querySelector(".container")

const btns = [
    {
        nome: "Soma",
        func: soma 
    },
    {
        nome: "Divisao",
        func: divisao 
    },
    {
        nome: "Subtração",
        func: subtracao 
    },
    {
        nome: "Multiplicação",
        func: multiplicacao 
    },
]

function soma () {
 alert("Soma")
}

function divisao () {
    alert("Divisao")
} 

function multiplicacao () {
    alert("Multiplicacao")
}

function subtracao () {
    alert("Subtracao")
}

btns.forEach((btn) => {
    const btnExercicio = document.createElement("button")
    btnExercicio.textContent = btn.nome
    btnExercicio.addEventListener("click", btn.func)

    divContainer.appendChild(btnExercicio)
})
