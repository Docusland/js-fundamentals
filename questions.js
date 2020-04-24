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

function calculPuissance(a,b)
{
  return Math.pow(a,b);
}

function valeurAbsolue(nb)
{
  return Math.abs(nb);  
}

function valeurAbsolueArray(arr)
{
  let new_arr = [];
  arr.forEach(i => {
    new_arr.push(Math.abs(i))
  });

  return new_arr;
}

function sufaceCercle(nb)
{
  return;
}

function hypothenuse(a,b)
{
  return Math.hypot(a, b);
}

function calculIMC(p,t)
{
  const imc = p / (t*t);
  return parseFloat(imc.toFixed(2));
}

function CreationTableauLangages()
{
  const langages = ["Html","CSS","Java","PHP"];
  return langages;
}

function CreationTableauNombres()
{
  const nombres = [0,1,2,3,4,5];
  return nombres;
}

function RemplacementElement(langages)
{
  langages[2] = "Javascript";
  return langages;
}

function AjoutElementLangages(langages)
{
  langages = langages.concat(['Ruby','Python']);
  return langages;
}

function AjoutElementNombres(nombres)
{
  return [-2,-1].concat(nombres);
} 

function SuppressionPremierElement(langages)
{
  return langages.splice(1);
}

function SuppressionDernierElement(langages)
{
  return langages.splice(0,(langages.length - 1));
}

function ConversionChaineTableau(reseaux_sociaux_chaine)
{
  const reseaux_sociaux = reseaux_sociaux_chaine.split(',');
  return reseaux_sociaux;
}

function ConversionTableauChaine(langages)
{
  const langages_chaine = langages.join(',');
  return langages_chaine;
}

function TriTableau(reseaux_sociaux)
{
  return reseaux_sociaux.sort();
}

function InversionTableau(langages)
{
  return langages.reverse();
}

function TriSpecial(langages)
{
  langages.sort(function(a,b){
    return a.length - b.length;
  });
  return langages;
}