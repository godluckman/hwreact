const userInput = () => {
    const surname = inputString('Укажите свою фамилию:', checkString);
    const name = inputString('Укажите свою имя:', checkString);
    const patronymic = inputString('Укажите свою отчество:', checkString);
    const age = parseInt(inputString('Укажите количество полных лет:', checkNumber));
    const gender = confirm("Ваш пол - мужской?") ? "мужской" : "женский";
    return { surname, name, patronymic, age, gender };
}

const printUserData = (userData) => {
    alert(`Ваше ФИО: ${userData.surname} ${userData.name} ${userData.patronymic}
Ваш возраст в годах: ${userData.age}
Ваш возраст в днях: ${userData.age*365}
${userData.age >= 18 ? "Вы уже совершеннолетний" : "Вы не совершеннолетний"}
Ваш пол: ${userData.gender}
Вы на пенсии: ${userData.age>=60 ? "да" : "нет"}`)
}

const cyrillicPattern = /^\p{Script=Cyrillic}+$/u;
const checkNumber = (str) => str < 99 && str > 6;
const checkString = (str) => cyrillicPattern.test(str);

const inputString = (msg, check) => {
    while (true) {
        const str = prompt(msg);
        if (check(str))
            return str;
    }
}

const userData = userInput();
printUserData(userData);
