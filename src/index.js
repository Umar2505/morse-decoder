const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};

function decode(expr) {
    var keys=Object.keys(MORSE_TABLE)
    var elements=Object.values(MORSE_TABLE)
    var str = expr.match(/.{10}/g)
    var result = []
    for(var i=0;i<=str.length-1;i++) {
        var res= str[i].match(/.{1}./g)
        for(var j=0;j<=res.length-1;j++) {
            if(res[j]=="10") {
                res[j]="."
            }else if(res[j]=="11") {
                res[j]="-"
            }else if(res[j]=="00") {
                res[j]=""
            }
        }
        result.push(res.join(""))
    }
    for(var i=0;i<=result.length-1;i++) {
        for(var j=0;j<=keys.length-1;j++) {
            if(result[i]==keys[j]) {
                result[i]=elements[j]
            }
        }
    }
    return result.join("")
}

module.exports = {
    decode
}