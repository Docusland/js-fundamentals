/**
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieur façon de faire.
 */

function tailleString(texte) {
  return texte.length
}


function remplaceCar(texte,remplacé,remplaceur){
  var array=Array.from(texte)
  for (let i = 0; i < texte.length; i++) {
    if (array[i]==remplacé){
      array[i]=remplaceur
      texte=array.join("")
      return texte
    } 
  }
}

function concatString(texte_a,texte_b){
  return texte_a+texte_b
}

function afficherCar( texte,nb){
  var array=Array.from(texte)
  let nombre=0
  for (let i = 0; i < array.length; i++) {
      nombre+=1
     if (nombre==nb){
      return array[i]
     }
    
  }
}
 function afficherNCar(texte,nb){
  var array=Array.from(texte)
  let nombre=0
  var texteFinal=''
  for (let i = 0; i < array.length; i++) {
      nombre+=1
      texteFinal+=array[i]
     if (nombre==nb){
      return texteFinal
     }
    
  }
}
function majusculeString(texte){
  return texte.toUpperCase()

}
function SupprEspaceString(texte){
  return texte.trim()
}

function IsString(texte){
  if (typeof texte=='string'){
    return true
  }
}
function AfficherExtensionString(texte){
  var extention=''
  for (let i = 0; i < texte.length; i++) {
    if (texte[i]=='.'){
      extention=texte.substring(i+1,texte.length)
      return extention
    }
    
  }
}

function NombreEspaceString(texte){
  var nombre=0
  for (let i = 0; i < texte.length; i++) {
    if (texte[i]==" "){
      nombre+=1
    }
  }
  return nombre
}
function InverseString(texte){
  return texte.split('').reverse().join('');
}
function  minusculeString(texte){
  return texte.toLowerCase()
}

function countDistinctCar(texte){
  let nouveauCaractère=[]
  for (let i = 0; i < texte.length; i++) {
    let vérifier=0
    var nb=0
    for (let j = 0; j < nouveauCaractère.length; j++) {
      if (texte[i]==nouveauCaractère[j]){
        vérifier=1
      }
      
    }
    if (vérifier==0){
      nouveauCaractère.push(texte[i])
       
    } 
  }
   for (let j = 0; j < nouveauCaractère.length; j++) {
     nb+=1
   }
  return nb
}

function calculPuissance(chiffre, puissance){
  var resultat=1
  for (let i = 0; i < puissance; i++) {
    resultat*=chiffre
  }
  return resultat
}

function valeurAbsolue(chiffre){
  return Math.abs(chiffre)
}

function valeurAbsolueArray(array){
  for (let i = 0; i < array.length; i++) {
    array[i]=Math.abs(array[i])
    
  }
return array
}

function sufaceCercle(rayon){
  var resultat = Math.PI * rayon* rayon 
   return Math.ceil(resultat) 
}
function hypothenuse(chiffre_a, chiffre_b){
  var carré = (chiffre_a* chiffre_a) + (chiffre_b*chiffre_b)
  var hyp=  Math.sqrt(carré)
  return hyp
}
function calculIMC(poids, taille){
  var imc = poids/(taille*taille)
  imc = imc*100
  imc = Math.round(imc)
  imc = imc/100
  return imc
}
function CreationTableauLangages(){
var langages=["Html","CSS","Java","PHP"]
return langages
}

function CreationTableauNombres(){
  
  var langages =[0,1,2,3,4,5]
  return langages

}

function RemplacementElement(langages){
  langages[2]='Javascript'
  return langages
}

function AjoutElementLangages(langages){
  langages.push('Ruby')
  langages.push('Python')
  return langages
}
function AjoutElementNombres(nombres){
  nombres.unshift(-1)
  nombres.unshift(-2)
  return nombres
}

function SuppressionPremierElement(langages){
  langages.shift()
  return langages
}
function SuppressionDernierElement(langages){
  langages.pop()
  return langages
}

function ConversionChaineTableau(réseaux){
  return réseaux= réseaux.split(',')
}
function  ConversionTableauChaine(langages){
  return langages= langages.join(',')
}
function TriTableau(reseaux_sociaux){
  reseaux_sociaux=reseaux_sociaux.sort()
  return reseaux_sociaux
}
function InversionTableau(langages){
  return langages.reverse()
}
function TriSpecial(langages){
  langages=langages.sort(function(a,b){
    return a.length- b.length
  })
  return langages
}


