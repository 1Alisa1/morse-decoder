const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let result = [];

    let startNum = 0;

    for (let i = 0; i < expr.length; i++) {

        if (i % 10 === 0) {
            arr.push(expr.substr(startNum, 10));

            startNum += 10;
        }
    }

    let sliced_array = arr.map(el => {
        let temp = [];

        for (let i = 0; i < el.length; i += 2) {
            temp.push(el.slice(i, i + 2));
        }

        return temp;
    })


    let temp = sliced_array.map(el =>
        el.filter(element => element !== '00')
          .map(element => element === '10' ? '.' : element === '11' ? '-' : '**')
          .join('')

    );


    temp.forEach((element, i) => {
        if (MORSE_TABLE[element]) {
            result.push(MORSE_TABLE[element]);
        } else if (element === '**********') {
            result.push(' ')
        }
    })


    return result.join('');
}

module.exports = {
    decode
}