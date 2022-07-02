// Desafio 1
function compareTrue(gasolina, sair) {
  if (gasolina === true && sair === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTotal = (base * height) / 2;
  return areaTotal;
}

// Desafio 3
function splitSentence(frase) {
  let arraySplit = frase.split(' ');
  return arraySplit;
}
// Desafio 4
function concatName(concat) {
  let firstName = concat[0];
  let lastName = concat[concat.length - 1];
  return lastName + ', ' + firstName;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
} 
// Desafio 6
function highestCount(array) {
  let bigNumber = Number.MIN_SAFE_INTEGER
  let vezesQueAparece = 0;
  for(let index = 0; index < array.length; index += 1) {
    if (array[index] > bigNumber ) {
      bigNumber = array[index];
    }
  } 
  for(let index = 0; index < array.length; index += 1) {
    if (array[index] === bigNumber) {
      vezesQueAparece += 1;
    }
  }  
  return vezesQueAparece;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1P = Math.abs(mouse - cat1);
  let cat2P = Math.abs(mouse - cat2);
  if(cat1P < cat2P ){
    return 'cat1';
  }else if (cat2P < cat1P) {
    return 'cat2';
  }else {
    return 'os gatos trombam e o rato foge';
  }
  
}

// Desafio 8
function fizzBuzz(listNumbers) {
  let numbers = [];
  for (let index = 0; index < listNumbers.length; index += 1) {
    if (listNumbers[index] % 3 === 0 && listNumbers[index] % 5 === 0) {
       numbers.push('fizzBuzz');
    }else if (listNumbers[index] % 5 === 0) {
        numbers.push('buzz');
    }else if (listNumbers[index] % 3 === 0) {
       numbers.push('fizz');
    }else {
       numbers.push('bug!');
    }
  }
  return numbers;
}

// Desafio 9
function encode(string2) {
  let caractere = ''
  for (let key in string2){
    if(string2[key] === 'a'){
      caractere += '1'; 
    }else if (string2[key] === 'e'){
      caractere += '2';
    }else if (string2[key] === 'i'){
      caractere += '3';
    }else if (string2[key] === 'o'){
      caractere += '4';
    }else if(string2[key] === 'u'){
      caractere += '5';
    } else {
      caractere += string2[key];
    }
     //string2[key] = caractere

  } 
 return caractere;
}
encode('')

function decode(string) {
  let caractere1 = ''
  for (let key in string){
    if(string[key] === '1'){
      caractere1 += 'a'; 
    }else if (string[key] === '2'){
      caractere1 += 'e';
    }else if (string[key] === '3'){
      caractere1 += 'i';
    }else if (string[key] === '4'){
      caractere1 += 'o';
    }else if(string[key] === '5'){
      caractere1 += 'u';
    } else {
      caractere1 += string[key];
    }
  } 
  return caractere1;
}



module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
}
