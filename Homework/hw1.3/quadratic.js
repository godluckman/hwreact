let x1, x2
const quadraticEquation = function(a, b, c) {
    if (!a)
        return `уравнение ${a}x^2${b}x${c} = 0 имеет один корень x = ${x1}`;
    const D = b * b - 4 * a * c;
    if (D < 0)
        return 'не имеет вещественных корней';
    if (!D)
        x1 = (-b + Math.sqrt(D)) / (2 * a);
    else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a)
        x2 = (-b - Math.sqrt(D)) / (2 * a);
    }
    if (a === 1) {
        a = '';
    }
    if (b > 0) {
        b = '+' + b
    }
    if (c > 0) {
        c = '+' + c
    }
    if (!D) {
        return `уравнение ${a}x^2${b}x${c} = 0 имеет один корень x = ${x1}`
    }
    return `уравнение ${a}x^2${b}x${c} = 0 имеет конрни x1 = ${x1} и x2 = ${x2}`
}


console.log(quadraticEquation(1, 12, 36));