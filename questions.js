/**
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieur façon de faire.
 */

function tailleString(texte) {
  return texte.length
}
function remplaceCar (texte_afficher , texte_a_remplace , remplacement) {
  return texte_afficher.replace(texte_a_remplace,remplacement)
}
function concatString ( premier_texte , deuxième_texte){
  return premier_texte.concat(deuxième_texte)
}
function afficherCar (texte , cinquieme_element){
  return texte[cinquieme_element -1]
}
function afficherNCar (texte , neuf_element){
  return texte.substr(0,neuf_element)
}
function majusculeString(texte){
  return texte.toUpperCase()
}
function SupprEspaceString(texte){
  return texte.trim();
}
function IsString(texte){

  return typeof texte === 'string'
}
function AfficherExtensionString(str)
{
  result = str.split('.')
  return result[1]
}
function NombreEspaceString( texte){
  return texte.split(' ').length - 1;
}
function InverseString(texte){
  return texte.split('').reverse().join('')
}
function minusculeString(texte){
  return texte.toLowerCase()
}
function countDistinctCar(texte){
  resultat = 0
  lettre=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
for (i = 0; i < texte.length; i++) {
  resultat += i
  if (lettre === texte){
    resultat +=0
  } 
}

}