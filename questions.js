/**
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieur façon de faire.
 */

function tailleString(texte) {
  return (texte.length) ;
}

function remplaceCar(texte,texte2,texte3) {
return texte = texte.replace(texte2,texte3)
}

function concatString (texte,texte2){
  return texte = texte + texte2;
}

function afficherCar (texte,nombre){
  return texte[nombre-1] ;
}

function afficherNCar(texte, nombre){
  return texte.substr(0, 9);
}

function majusculeString (texte){
 return texte.toUpperCase();
}

function SupprEspaceString(texte){
  return texte.trim();
}

function IsString(texte){
  return texte.includes(texte);
}

function AfficherExtensionString(fichier) 
{
  if (fichier!="")
  {
    nbchar = fichier.length;
    extension = fichier.substring(nbchar-3,nbchar); 
    return extension; 
  }
}

function NombreEspaceString(element) {
  texte = element.split(' ').length - 1;
  return texte;
}

function InverseString (texte) {
  return texte.split("").reverse().join("");
}

function minusculeString (texte) {
  return texte.toLowerCase();
}

function countDistinctCar () {
  
}