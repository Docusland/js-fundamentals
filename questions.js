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

function concatString (first_text , second_text){
  return first_text.concat(second_text);
  /*return first_text+second_text;*/
}
function afficherCar(text, fifthelem){
    return text[fifthelem -1];
}
function afficherNCar (texte , neuf_element){
  return texte.substr(0,neuf_element);
}
function majusculeString(string){
  return string.toUpperCase();
}
function SupprEspaceString(string){
  return string.trim();
}
function IsString(str){
  return typeof str === 'string';
}
function AfficherExtensionString(str){
  result = str.split('.')
  return result[1]
}
function NombreEspaceString(text){
  return text.split(' ').length-1;
}
function InverseString(text){
  return text.split('').reverse().join('');
}
function minusculeString(string){
  return string.toLowerCase();
}
function CountDistinctCar(text){
  return text.split.length;
}
 