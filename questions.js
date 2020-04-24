/**
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieur façon de faire.
 */

 //Les chaines de caractères :

function tailleString(texte) {
  return texte.length;
}
function remplaceCar(texte1,texte2,texte3) {
  return texte1.replace(texte2,texte3);
}
function concatString(texte1,texte2) {
  return texte1 + texte2;
}
function afficherCar(texte,N) {
  return texte[N-1];
}
function afficherNCar(texte,N) {
  return texte.substr(0,N);
}
function majusculeString(texte) {
  return texte.toUpperCase(texte);
}
function SupprEspaceString(texte) {
  return texte.trim(texte);
}
function IsString(texte) {
  res=typeof(texte)
  if (res === 'string'){
    return true;
  }
  else{
    return 'null fdp';
  }
}
function AfficherExtensionString(texte) {
  return texte.slice((texte.lastIndexOf('.') - 1 >>> 0) + 2);
}
function NombreEspaceString(texte) {
  return  texte.split(' ').length - 1;
}
function InverseString(texte) {
  return texte.split('').reverse().join('');
}
function minusculeString(texte) {
  return texte.toLowerCase(texte);
}
// function countDistinctCar(texte) {
//   // a=texte;
// }


//Les nombres et opérations mathématiques : 

function calculPuissance(x,y){
  return Math.pow(x,y);
}
function valeurAbsolue(x){
  return Math.abs(x);
}
function valeurAbsolueArray(array){
  for (let i = 0; i < array.length; i++) {
    array[i] = Math.abs(array[i]);
  }
  return array;
}
function sufaceCercle(x) {
  return Math.round( Math.PI * (x*x));
}
function hypothenuse(x,y) {
  var res = (x*x)+(y*y)
  return Math.sqrt(res)
}

function calculIMC(x,y){
  res= x/(y*y) 
  return res.toFixed(2); 
}