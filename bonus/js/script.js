/* Descrizione
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// chiedo all'utente il numero di km che vuole percorrere
let chilometri = parseFloat(prompt ("Inserisci il numero di km che vuoi percorrere:"));
console.log("numero di km da percorrere:", chilometri);
let eta = parseInt(prompt ("Inserisci la tua età:"));
console.log("età persona:", eta);

// calcolo prezzo base biglietto
const costoAlKm = 0.21;
let costoBase = (costoAlKm * chilometri);
console.log ("Costo base biglietto:", costoBase);

// stampo a video il costo finale del biglietto
document.getElementById('costoBase').innerHTML = 'Il prezzo del biglietto è di: ' + parseFloat(costoBase).toFixed(2) + '€.';

// Prezzo base per età compresa tra i 18 e 65 anni
let prezzoScontato = costoBase;

// calcolo prezzo biglietto con sconti
if (eta < 18) {
  prezzoScontato = (costoBase - ((costoBase * 20) / 100));
} else if (eta > 65) {
  prezzoScontato = (costoBase - ((costoBase * 40) / 100));
}
console.log("Il prezzo scontato del biglietto è di:", prezzoScontato);

// stampo a video il costo finale del biglietto
document.getElementById('prezzoScontato').innerHTML = 'Il prezzo scontato del biglietto è di: ' + parseFloat(prezzoScontato).toFixed(2) + '€.';

