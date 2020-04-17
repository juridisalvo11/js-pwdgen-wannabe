//chiedere nome utente
var nome_utente = prompt('Nome')
console.log(nome_utente);
//chiedere cognome utente
var cognome_utente = prompt('Cognome - Scrivere il cognome in una sola parola')
//chiedere colore preferito utente
var colore_preferito_utente = prompt('Colore Preferito')
// Anno corrente
var anno_corrente = '20'
//generare password utente
document.getElementById('nome-utente').innerHTML = nome_utente;
document.getElementById('cognome-utente').innerHTML = cognome_utente;
document.getElementById('colore-utente').innerHTML = colore_preferito_utente;
document.getElementById('password-utente').innerHTML = nome_utente + cognome_utente + colore_preferito_utente + anno_corrente;

document.getElementById('nome').setAttribute('class', 'visible');
document.getElementById('cognome').setAttribute('class', 'visible');
document.getElementById('colore').setAttribute('class', 'visible');
document.getElementById('password').setAttribute('class', 'visible');
