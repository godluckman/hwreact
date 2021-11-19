const userInput = prompt('Введите число: ', 00);
const inputArray = userInput.split('');
let result = [];
for (let i = 0; i < inputArray.length; i++) {
    if (+inputArray[i] % 2 == 0 && +inputArray[i + 1] % 2 == 0) {
        result.push(inputArray[i], '-');
    } else {
        result.push(inputArray[i]);
    }
}
result = result.join('');
console.log(result);