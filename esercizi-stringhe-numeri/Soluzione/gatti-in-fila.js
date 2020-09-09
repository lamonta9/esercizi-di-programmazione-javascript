/*
  Gatti in fila
  Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il numero di file risultanti
    - Nel caso l'ultima fila risulti incompleta indicare il numero di gatti mancanti per completarla (quanti gatti mancano per arrivare a b?)

  Esempio:
    Input: numero di gatti = 44, gatti per fila = 6
    Output: numero di file = 8, gatti mancanti = 4

  Consigli:
  Per l'arrotondamento ti consiglio di non usare Math.round (arrotonda all'intero superiore solo da .5 in su),
  utilizza Math.ceil (arrotonda sempre all'intero superiore).

  http://www.imparareaprogrammare.it
*/
var gatti=44; //numero totali di gatti
var fila=6; //numero di gatti per fila
var file; //file totali
var ultimafila; //numero di gatti presenti nell'ultima fila
var gattimancanti; //numero di garri che mancano per completare l'ultima fila
file =Math.ceil(gatti / fila); // Arrotonda all'intero sup.
ultimafila= gatti % fila;
gattimancanti = fila - ultimafila;

console.log('Gatti: '+gatti);
console.log('in Fila da: '+fila);
console.log('File : '+file);
console.log('Ultima Fila: '+ultimafila);
console.log('Gatti mancanti nella ultima fila: '+gattimancanti);
