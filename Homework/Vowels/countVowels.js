const russianLetters = ['а','у','о','и','э','ы','я','е','ё','ю']

const vowels = function(letter) {
    return russianLetters.includes(letter)}
const countVowelLetters = function(str) {
    return 'Количество гласных = ' + str.toLowerCase().split('').filter(vowels).length;
}

console.log(countVowelLetters('Пришла зима, запахло…'));