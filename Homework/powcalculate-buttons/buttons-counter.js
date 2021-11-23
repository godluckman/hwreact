const buttons = document.querySelectorAll('button');

[...buttons].forEach(button => {
    button.onclick = count(button)
});

function count(button) {
    let counter = 0;
    return () => {
        ++counter;
        button.innerHTML = counter;
    }
}