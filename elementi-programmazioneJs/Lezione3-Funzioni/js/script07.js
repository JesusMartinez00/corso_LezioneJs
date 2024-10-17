let calcolatrice = document.getElementById("calcolatrice");
let btnSomma = document.getElementById("btnSomma");
let btnMultiplica = document.getElementById("btnMultiplica");
let btnDivisoine = document.getElementById("btnDisione");
let btnSostrae = document.getElementById("btnSostrae");


//somma
function sommaNumeri(){
    let numeroInserito = [] 
    numeroInserito = parseInt(document.getElementById("Numero").value);
    
    let somma = numeroInserito
    return somma
}


btnSomma.addEventListener("click", function(){
    let somma = sommaNumeri();
    calcolatrice.innerHTML = somma
})

