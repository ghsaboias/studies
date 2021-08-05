function disemvowel(str) {
    let lowerVowels = ['a', 'e', 'i', 'o', 'u'];
    let upperVowels = ['A', 'E', 'I', 'O', 'U'];
    for (let char of str) {
      if (upperVowels.includes(char)) {
            str = str.replace(char.toUpperCase(), '');
        } else if (lowerVowels.includes(char)) {
            str = str.replace(char, '');
        }
    }
    return str; 
}

let MORSE_CODE = {'-.-.--': '!',
'.-..-.': '"',
'...-..-': '$',
'.-...': '&',
'.----.': '\'',
'-.--.': '(',
'-.--.-': ')',
'.-.-.': '+',
'--..--': ',',
'-....-': '-',
'.-.-.-': '.',
'-..-.': '/',
'-----': '0',
'.----': '1',
'..---': '2',
'...--': '3',
'....-': '4',
'.....': '5',
'-....': '6',
'--...': '7',
'---..': '8',
'----.': '9',
'---...': ':',
'-.-.-.': ';',
'-...-': '=',
'..--..': '?',
'.--.-.': '@',
'.-': 'A',
'-...': 'B',
'-.-.': 'C',
'-..': 'D',
'.': 'E',
'..-.': 'F',
'--.': 'G',
'....': 'H',
'..': 'I',
'.---': 'J',
'-.-': 'K',
'.-..': 'L',
'--': 'M',
'-.': 'N',
'---': 'O',
'.--.': 'P',
'--.-': 'Q',
'.-.': 'R',
'...': 'S',
'-': 'T',
'..-': 'U',
'...-': 'V',
'.--': 'W',
'-..-': 'X',
'-.--': 'Y',
'--..': 'Z',
'..--.-': '_',
'...---...': 'SOS'}

decodeMorse = function(morseCode){
    morseCode = morseCode.split(' ');
    let decodedMsg = '';
    let spaceCounter = 0
    for (let item of morseCode) {
      if (item in MORSE_CODE) {
        decodedMsg += MORSE_CODE[item];
        spaceCounter = 0;
      } else if (item === '') {
        spaceCounter += 1;
        if (spaceCounter === 2) {
          decodedMsg += ' ';
        }
      }
    }
    return decodedMsg;
  } 

// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
sortDescending = function(array) {
  let length = array.length;
  for (let counter = 0; counter <= length; counter += 1) {
    for (let firstOfPair = 0, secondOfPair = 1; secondOfPair < length; firstOfPair += 1, secondOfPair += 1) {
      if (array[firstOfPair] < array[secondOfPair]) {
        let secondPlaceholder = array[secondOfPair];
        array[secondOfPair] = array[firstOfPair];
        array[firstOfPair] = secondPlaceholder;
      }
    }
  }
  return array;
}
simpleSortDescending = function(array) {
  return array.sort((a, b) => b - a);
}
// console.log(simpleSortDescending([10, 9, 4, 7, 6, 1, 10, 2, 8, 5, 10]))

// Merge arbitrary number of arrays given as input
function mergeArrays() {
  let allArrays = [];
  for (let argument of arguments) {
    for (let item of argument) {
      allArrays.push(item);
    }
  }
  return allArrays
}
function simpleMergeArrays( ...arrays) {
  return arrays.flat();
}
// console.log(simpleMergeArrays([true, true], [1, 2], ['a', 'b']));