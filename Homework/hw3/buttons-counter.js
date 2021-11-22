document.addEventListener('click', function(event) {

    if (event.target.dataset.counter !== undefined) {
        event.target.value++;
    }
});