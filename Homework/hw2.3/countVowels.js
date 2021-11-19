const vowels = function(letter) {
    return letter == 'а' || letter == 'у' || letter == 'о' || letter == 'и' || letter == 'э' || letter == 'ы' || letter == 'я' || letter == 'е' || letter == 'ё' || letter == 'ю'
}

const countVowelLetters = function(str) {
    return 'Количество гласных = ' + str.toLowerCase().split('').filter(vowels).length;
}

console.log(countVowelLetters('Пришла зима, запахло…'));