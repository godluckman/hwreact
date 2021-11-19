function zero(arg) {
    if (!arg) {
        return function() { return 0 };
    } else {
        return 'Результат: ' + arg(0);
    }
}

function one(arg) {
    if (!arg) {
        return function() { return 1 };
    } else {
        return 'Результат: ' +
            arg(1);
    }

}

function two(arg) {
    if (!arg) {
        return function() { return 2 };
    } else {
        return 'Результат: ' +
            arg(2);
    }

}

function three(arg) {
    if (!arg) {
        return function() { return 3 };
    } else {
        return 'Результат: ' +
            arg(3);
    }

}

function four(arg) {
    if (!arg) {
        return function() { return 4 };
    } else {
        return 'Результат: ' +
            arg(4);
    }

}

function five(arg) {
    if (!arg) {
        return function() { return 5 };
    } else {
        return 'Результат: ' +
            arg(5);
    }


}

function six(arg) {
    if (!arg) {
        return function() { return 6 };
    } else {
        return 'Результат: ' +
            arg(6);
    }

}

function seven(arg) {
    if (!arg) {
        return function() { return 7 };
    } else {
        return 'Результат: ' +
            arg(7);
    }

}

function eight(arg) {
    if (!arg) {
        return function() { return 8 };
    } else {
        return 'Результат: ' +
            arg(8);
    }

}

function nine(arg) {
    if (!arg) {
        return function() { return 9 };
    } else {
        return 'Результат: ' +
            arg(9);
    }

}

let plus = (n) => {
    return function(a) { return a + n() };

}
let minus = (n) => {
    return function(a) { return a - n() };

}
let dividedBy = (n) => {
    return function(a) { return a / n() };

}
let times = (n) => {
    return function(a) { return a * n() };
}


console.log(two(times(two())));