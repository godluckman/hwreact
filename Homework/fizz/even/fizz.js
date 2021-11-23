const fizz = ["fizz"],
    buzz = ["buzz"];
const fizzBuzz = () => {
    for (let i = 1; i < 101; i++) {
        console.log((((fizz[i % 3] || "") + (buzz[i % 5] || "")) || i));
    }
}
fizzBuzz();