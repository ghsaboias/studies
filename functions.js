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