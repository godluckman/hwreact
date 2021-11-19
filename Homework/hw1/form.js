let attempt = 3;
while (attempt !== 0) {
    const surname = prompt('Укажите свою фамилию:');
    const firstName = prompt('Укажите свою имя:');
    const patronymic = prompt('Укажите свою отчество:');
    const age = prompt('Укажите количество полных лет:');
    let gender = confirm("Ваш пол - мужской?");

    if (age < 99 && age > 0 &&
        firstName.length < 20 && firstName.length > 0 &&
        surname.length < 20 && surname.length > 0 &&
        patronymic.length < 20 && patronymic.length > 0 &&
        typeof surname === 'string' && typeof patronymic === 'string' && typeof firstName === 'string') {
        let old, oldEnough;

        if (gender) {
            gender = "мужской";
        } else {
            gender = "женский";
        }

        if (age >= 60) {
            old = 'да'
        } else {
            old = 'нет'
        }

        if (age > 18) {
            oldEnough = 'Вы уже совершеннолетний'
        } else {
            oldEnough = 'Вы не совершеннолетний'
        }

        alert('Ваше ФИО: ' + surname + ' ' + firstName + ' ' + patronymic + '\n' +
            'Ваш возраст в годах: ' + age + '\n' +
            'Ваш возраст в днях: ' + age * 365 + '\n' +
            oldEnough + '\n' +
            'Ваш пол: ' + gender + '\n' +
            'Вы на пенсии: ' + old
        );
    } else {
        alert("Error. Invalid value");
    }
    attempt--;
}
alert('Превышено количество попыток, обновите страницу.');