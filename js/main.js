'use strict'

// associamo l' ul alla variabile
const lista = document.querySelector('.list');
console.log(lista);

// array di prodotti
const spesa = ['Pane', 'Insalata', 'Uova', 'Pasta','Riso','Cozze','Patate','Melograno','Kiwi', 'Farina', 'Vino rosso',];
console.log(spesa);

//dichiarazione
let i = 0;

//ciclo
//****************************************
 while(i < spesa.length - 1){

     //creiamo il li
     let prodotto = document.createElement("li");

     //assegniamo la classe
     prodotto.classList.add('prodotto');

     //inseriamo il prodotto dell' indice
     prodotto.textContent = spesa[i];

 // appendiamo il li nell' ul
     lista.append(prodotto);

    //incremento
      i++;

    // aggiungiamo un evento on click
    prodotto.addEventListener('click', function(event) {
    prodotto.classList.toggle('comprato');    
    console.log("ho cliccato");
    console.log(event);
    }) 
 }
//*****************************************



