"use strict";

let normalnazmienna=0;
function dodajpunkty(){
    normalnazmienna=normalnazmienna+49658753;
    document.getElementById("counter-display").textContent= normalnazmienna;
}
function resetPunktow(){
    normalnazmienna=0;
    document.getElementById("counter-display").textContent= normalnazmienna;
}
let zl =["1zł","1000zł","10000zł","1000000zł","10000000000zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1000zł","1000zł","1000zł","1000zł","1000zł","1000zł","10000zł","10000zł","10000zł","10000zł","10000zł","10000000000zł","10000000000zł","10000000000zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł","1zł",S] 

function lotozl(){
     let item = Math.floor(Math.random()*zl.length);
     document.getElementById("random-display").textContent = zl[item];
}


// TODO: utwórz zmienną przechowującą stan licznika
// TODO: napisz funkcję addPoint, która zwiększa licznik o 1 i aktualizuje wyświetlacz
// TODO: utwórz tablicę z elementami do losowania
// TODO: napisz funkcję drawItem, która losuje element z tablicy i wyświetla go
