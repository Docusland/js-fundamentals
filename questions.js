
function tailleString(texte) {
  return texte.length;
}

function remplaceCar(texte, avant, apres) {
  return texte.replace(avant, apres);
}

function concatString(texte1, texte2) {
  return texte1 + texte2;
}

function afficherCar(texte, nb) { // a modifier
  return texte.charAt(nb-1);
}

function afficherNCar(texte, nb) {
  return texte.substr(0, nb);
}

function majusculeString(texte) {
  return texte.toUpperCase();
}

function SupprEspaceString(texte) {
  return texte.trim();
}

function IsString(texte) {
 return (typeof texte === 'string')
}

function AfficherExtensionString(img) {
  return img.substr(15, 18);
}

function NombreEspaceString(texte) {
  return texte.split(' ').length - 1;
}

function InverseString(texte) {
  var splitString = texte.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

function minusculeString(texte) {
  return texte.toLowerCase();
}

function countDistinctCar(texte) {
  return ;
}


//Partie 2

function calculPuissance(nb1, nb2) {
  return Math.pow(nb1,nb2);
}

function valeurAbsolue(nb) {
  return Math.abs(nb);
}

function valeurAbsolueArray(array) {
  array.split
}

function surfaceCercle(R) {
  surface = Math.pow(R, 2) * Math.PI;
  return Math.ceil(surface);
}

function hypothenuse(nb1, nb2) {
  hypo = Math.pow(nb1, 2) + Math.pow(nb2, 2);
  return Math.sqrt(hypo);
}
