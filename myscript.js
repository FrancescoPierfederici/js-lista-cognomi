// CONSEGNA:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova



// ELENCO COGNOMI
var listaCognome = ["Cappellacci", "Castro", "Arceni", "Mastroangelo", "Ricci"];

// INSERIRE COGNOME
var cognome = prompt("Inserisci il tuo cognome");

// SE IL COGNOME È UN NUMERO
if (!Number.isNaN(parseInt(cognome))) {
    alert("Non vanno inseriti numeri");
}
// SE LA PRIMA LETTERA È MINUSCOLA LA TRASFORMIAMO IN MAISCUOLA PER NON AVERE PROBLEMI DI ORDINE ALFABETICO
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1);
// INSERIAMO IL COGNOME SCRITTO NELL'ARRAY
listaCognome.push(cognome);
// STAMPIAMO LA LISTA IN ORDINE ALFABETICO
console.log(listaCognome.sort());

// TROVIAMO LA POSIZIONE DEL COGNOME INSERITO
var pos = listaCognome.indexOf(cognome) + 1;
// STAMPIAMO LA POSIZIONE
console.log(pos);




