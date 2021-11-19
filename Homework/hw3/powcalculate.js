const pow = (x) => {
    return (y) => {
        if (y == 1) {
            return x;
        } else {
            return x * pow(x)(y - 1);
        }
    }
}

console.log(pow(2)(4));

const calculate = (a) => {
    return (o) => {
        return (b) => {
            if (o === '+') {
                return a + b;
            } else if (o === '-') {
                return a - b;
            } else if (o === '*') {
                return a * b;
            } else {
                return a / b;
            }
        }
    }
}

console.log(calculate(6)('/')(3));