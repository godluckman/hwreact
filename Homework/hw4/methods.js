let numbers = [2, 3, 5, 7, 11, 13, 17, 19];

function currentSums(numbers) {
    let result = [];
    if (!numbers.length) return result;

    let totalSum = numbers.reduce(function(sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);

    return result;
}

console.log(currentSums(numbers))


//////////////////////////////////////////////////////////////////////////


const str = "Каждый охотник желает знать, где сидит фазан."

function newArray() {
    function firstChar(value, index, arr) {
        if (index == 0)
            return true;
        else
            return arr[index - 1] === " ";
    }

    const array = [].filter.call(str, firstChar);

    console.log(array);
    return array;
}
newArray();


//////////////////////////////////////////////////////////////////////////


const arr = [1, 2, 3, 4, 5, 6, 7];

function changeArray(arr) {
    const first = arr.slice(0, Math.round(arr.length / 2));
    const second = arr.slice(Math.round(arr.length / 2), arr.length);
    if (first.length > second.length) {
        let c = first.pop();
        result = [...second, c, ...first];
    } else {
        result = [...second, ...first];
    }
    console.log(result);
    return result
}

changeArray(arr);