let fizz = ["fizz"],
    buzz = ["buzz"];
let fizzBuzz = function() {
    for (var i = 1; i < 101; i++) {
        console.log((((fizz[i % 3] || "") + (buzz[i % 5] || "")) || i));
    }
}
fizzBuzz();