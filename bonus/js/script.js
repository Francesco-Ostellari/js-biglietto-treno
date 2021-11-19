/* 
  il programma deve controllare se l'utente ha inserito qualcosa nel prompt o meno
*/

// chiedo all'utente il numero di km che vuole percorrere
let chilometri = parseFloat(prompt ("Inserisci il numero di km che vuoi percorrere:"));
console.log("numero di km da percorrere:", chilometri);
let eta = parseInt(prompt ("Inserisci la tua età:"));
console.log("età persona:", eta);

if (!(isNaN(chilometri)) && !(isNaN(eta)) && chilometri !='' && eta != '') {

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

} else if (chilometri == '' || isNaN(chilometri)) {
  console.log("Valore per i chilometri non corretto, inserire nuovamentee il valore");
  document.writeln("Valore per i chilometri non corretto, inserire nuovamentee il valore");
} else if (eta == '' || isNaN(eta)) {
  console.log("Valore per l'età non corretto, inserire nuovamente il valore");
  document.writeln("Valore per l'età non corretto, inserire nuovamente il valore");
}