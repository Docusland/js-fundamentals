/**
 * Trouvez la façon de faire la plus optimale.
 * Il peut y avoir plusieur façon de faire.
 */

function tailleString(texte) {
  return texte.length;
}

function remplaceCar(texte, char, rep) {
  let tab = Array.from(texte);
  for (let i = 0; i < texte.length; i++) {
    if (tab[i] == char) {
      tab[i] = rep;
      texte = tab.join('');
      return texte;
    }
  }
  return 'error';
}

function concatString(str1, str2) {
  return str1 + str2;
}

function  afficherCar(str, nb) {
  let tab = Array.from(str);
  return str[nb-1];
}

function afficherNCar(str, nb) {
  let tab = Array.from(str);
  let res = '';
  for (let i = 0; i < nb; i++) {
    res += str[i]
  }
  return str.substr(0, nb);
}

function majusculeString(str) {
  return str.toUpperCase();
}

function SupprEspaceString(str) {
  let tab = Array.from(str);
  if (tab[0] == ' ' && tab[str.length-1] == ' ') {
    return str.substr(1, str.length-2);
  }
  return "error";
}

function IsString(str) {
  if (typeof(str) == 'string') {
    return true;
  }
  return false;
}

function AfficherExtensionString(str) {
  let i = str.indexOf('.');
  return str.substr(i+1, str.length-1);
}

function NombreEspaceString(str) {
  let cmp = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ' ') {
      cmp += 1;
    }
  }
  return cmp;
}

function InverseString(str) {
  let reverse = '';
  for (let i = str.length-1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

function minusculeString(str) {
  return str.toLowerCase();
}

function countDistinctCar(str) {
  let unique = '';
  for (let i = 0; i < str.length; i++) {
    if (unique.indexOf(str.charAt(i)) < 0) {
      unique += str.charAt(i);
    }
  }
  return unique.length;
}

function calculPuissance(nb, pow) {
  let r = 1;
  for (let i = 0; i < pow; i++) {
    r *= nb;
  }
  return r;
}

function valeurAbsolue(nb) {
  if (nb < 0) {
    nb *= -1;
  }
  return nb;
}

function valeurAbsolueArray(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = valeurAbsolue(array[i]);
  }
  return array;
}

function sufaceCercle(nb) {
  return Math.round(Math.PI*calculPuissance(nb, 2));
}

function hypothenuse(nb1, nb2) {
  return Math.hypot(nb1, nb2);
}

function calculIMC(nb1, nb2) {
  let nb = nb2 > 0 ? nb1/(nb2*nb2) : 'error';
  nb = Math.round(nb*100)/100;
  return nb;
}

function CreationTableauLangages() {
  let langages = ["Html","CSS","Java","PHP"];
  return langages;
}

function CreationTableauNombres() {
  let nombres = [0,1,2,3,4,5];
  return nombres;
}

function RemplacementElement(array) {
  array[2] = 'Javascript';
  return array;
}

function AjoutElementLangages(array) {
  array.push('Ruby', 'Python');
  return array;
}

function AjoutElementNombres(array) {
  array.unshift(-2, -1);
  return array;
}

function SuppressionPremierElement(array) {
  array.shift();
  return array;
}

function SuppressionDernierElement(array) {
  array.pop();
  return array;
}

function ConversionChaineTableau(str) {
  return str.split(',');
}

function ConversionTableauChaine(array) {
  return array.join(',');
}

function TriTableau(array) {
  return array.sort();
}

function InversionTableau(array) {
  return array.reverse();
}

function TriSpecial(array) {
  return array.sort(function(a, b){return a.length - b.length});
}