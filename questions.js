/**
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieur façon de faire.
 */

function tailleString(texte) {
  return texte.length;
}

function remplaceCar(texte_afficher , texte_a_remplace , remplacement) {
  return texte_afficher.replace(texte_a_remplace,remplacement);
}

function concatString(first_text, second_text) {
  return first_text.concat(second_text);
}

function afficherCar(texte, cinquième) {
  return texte[cinquième-1];

}

function afficherNCar(premier_texte, nbr) {
  return premier_texte.substring(0,9);
}

function majusculeString(texte, maj) {
  return texte.toUpperCase (maj);
}

function SupprEspaceString(texte_afficher, texte_espace) {
  return texte_afficher.trim(texte_espace);
}

function IsString(texte, text_true) {
  return texte.typeof(text_true);
}

function IsString(str) { 
  return typeof str === 'string'
}

function AfficherExtensionString(str)
{
  result = str.split('.');
  return result[1];
}

function NombreEspaceString(text){
  return text.split(' ').length-1;
}

function InverseString(text){
  return text.split('').reverse().join('');
}

function minusculeString(texte, min) {
  return texte.toLowerCase (min);
}

function countDistinctCar(texte) {
  texte = texte.split('')
  return texte.split('').length;
}

function countDistinctCar(text) {
  //pour le moment je n'ai pas la solution
}