function calculate(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }
    return result;
}

function generateSequence(length) {
    let sequence = '';
    for (let i = 0; i < length; i++) {
        sequence += Math.floor(Math.random() * 10);
    }
    return sequence;
}

function encodeText(text) {
    let encodedText = '';
    for (let i = 0; i < text.length; i++) {
        encodedText += String.fromCharCode(text.charCodeAt(i) + 3);
    }
    return encodedText;
}

function decodeText(text) {
    let decodedText = '';
    for (let i = 0; i < text.length; i++) {
        decodedText += String.fromCharCode(text.charCodeAt(i) - 3);
    }
    return decodedText;
}

const userInput = prompt('Enter your choice (calculate/sequence/encode/decode):');
let output = '';
switch (userInput) {
    case 'calculate':
        const num1 = parseInt(prompt('Enter the first number:'));
        const num2 = parseInt(prompt('Enter the second number:'));
        const operator = prompt('Enter the operator (add/subtract/multiply/divide):');
        output = calculate(num1, num2, operator);
        break;
    case 'sequence':
        const length = parseInt(prompt('Enter the length of the sequence:'));
        output = generateSequence(length);
        break;
    case 'encode':
        const textToEncode = prompt('Enter the text to encode:');
        output = encodeText(textToEncode);
        break;
    case 'decode':
        const textToDecode = prompt('Enter the text to decode:');
        output = decodeText(textToDecode);
        break;
    default:
        output = 'Invalid choice';
}

console.log('Output:', output);
