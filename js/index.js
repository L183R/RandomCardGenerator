function ramdomCard() {
    const palos = ["♥", "♠", "♣", "♦"];
    //               0            1       2           3
    const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    let indexNumero = Math.floor(Math.random() * numeros.length);

    let indexPalo = Math.floor(Math.random() * palos.length);

    //1. obtener el elemento
    let top = document.querySelector(".top")
    //2. manipular
    top.innerHTML = palos[indexPalo]

    //1. obtener el elemento
    let bottom = document.querySelector(".bottom")
    //2. manipular
    bottom.innerHTML = palos[indexPalo]

    //1. obtener el elemento
    let number = document.querySelector(".number")
    //2. manipular
    number.innerHTML = numeros[indexNumero]

    if (indexPalo === 0 || indexPalo === 3) {
        top.style.color = "red"
        bottom.style.color = "red"

    } else {
        top.style.color = "black"
        bottom.style.color = "black"
    }
}

function Timer() {
    setTimeout("ramdomCard(); Timer()", 10000);
}