function compress(txt) {
    let string = txt.split(''),
        counter = 1
    let compString = string.reduce(function(
        accumulator,
        currentValue,
        currentIndex,
        array
    ) {

        if (currentValue === array[currentIndex + 1]) {
            counter++;
            return accumulator;
        } else {
            accumulator += (currentValue + counter);
            counter = 1;
            return accumulator;
        }

    }, "");
    return "\nРезультат: " + compString;
}

function uncompress(ntxt) {
    let string = ntxt.split(''),
        decompString = string.reduce(function(
            accumulator,
            currentValue,
            currentIndex,
            array
        ) {

            let parseValue = parseInt(currentValue);
            if (!isNaN(parseValue)) {
                accumulator += Array(parseValue + 1).join(array[currentIndex - 1]);
            }

            return accumulator;

        }, "");
    return 'Результат: ' + decompString
}

console.log(uncompress('a3'));