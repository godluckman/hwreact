let quadraticEquation = function(a, b, c) {
    if (a == 0)
        return 'не имеет вещественных корней';
    let D = b * b - 4 * a * c;
    if (D < 0)
        return 'не имеет вещественных корней';
    if (D == 0)
        return 'имеет один корень x =' + (-b + Math.sqrt(D)) / (2 * a);
    else if (D > 0) {
        return 'имеет корни x1 = ' + (-b + Math.sqrt(D)) / (2 * a) + ' и x2 = ' + (-b - Math.sqrt(D)) / (2 * a);
    }
}
console.log(quadraticEquation(2, 5, 2));