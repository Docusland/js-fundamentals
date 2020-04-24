/**
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieur façon de faire.
 */

function tailleString(texte) {
  return texte.length;
}
function remplaceCar (texte_afficher , texte_a_remplace , remplacement) {
  return texte_afficher.replace(texte_a_remplace,remplacement);
}

function concatString (str1, str2) {
  return str1+str2;
}

function afficherCar (texte, cinquième){
  return texte[cinquième -1];

}

function afficherNCar (texte, neuvième){
  return texte.substr (0,neuvième); 

}

function majusculeString (texte){

  return texte.toUpperCase(); 
   
}

function SupprEspaceString (texte){
  return texte.trim();
}

function IsString (texte){ 
  return typeof texte === 'string';
}

function AfficherExtensionString (texte) {
  texte = texte.split('.')
 return texte[1];
}

function NombreEspaceString (texte){

  return texte.split(' ').length-1
  /*texte.match(/ /g).length échappement de caractère avec / */
}

function InverseString (texte){
 
  return texte.split('').reverse().join('') ; 
}

function minusculeString (texte){
  return texte.toLowerCase();
}

function countDistinctCar (texte){
  return ;
}