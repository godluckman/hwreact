let m = 10 //prompt('Введите номер месяца');
let y = 2021 //prompt('Введите год');




const yeararr = ['Выбрать год'];
for (let i = 1980; i < new Date().getFullYear() + 1; i++) {
    yeararr.push(i);
}

const montharr = ['Выбрать месяц', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const gotSelectYear = document.getElementById("select-year");
const gotSelectMonth = document.getElementById("select-month");


function selectCreate(elem, arr) {
    let select = elem;
    let options = arr;
    for (let i = 0; i < options.length; i++) {
        let opt = options[i];
        let nElem = document.createElement("option");
        nElem.textContent = opt;
        nElem.value = opt;
        select.appendChild(nElem);
    }
}

selectCreate(gotSelectYear, yeararr);
selectCreate(gotSelectMonth, montharr);

// function getSelectedValue(elem) {
//     let select = elem
//     let value = select.value;
//     return value
// }

// y = getSelectedValue(gotSelectYear);
// m = getSelectedValue(gotSelectMonth);

let date = new Date(y, m);


let createButton = document.querySelector('.createbutton')

createButton.addEventListener('click', function() {
    renderCalendar();
});



const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector('.days');

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay() - 1;

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    document.querySelector('.date p').innerHTML = date.getFullYear() + ' год';

    let days = '';

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class='prev-date'>${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        // if (
        //     i === new Date().getDate() &&
        //     date.getMonth() === new Date().getMonth()
        // ) {
        //     days += `<div class='today'>${i}</div>`;
        // } else {
        days += `<div>${i}</div>`;
        // }
    }

    for (let j = 1; j <= nextDays + 1; j++) {
        days += `<div class='next-date'>${j}</div>`;
        monthDays.innerHTML = days;
    }
};



document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

document.querySelector('.prev-year').addEventListener('click', () => {
    date.setFullYear(date.getFullYear() - 1);
    renderCalendar();
});

document.querySelector('.next-year').addEventListener('click', () => {
    date.setFullYear(date.getFullYear() + 1);
    renderCalendar();
});


let calendars = [];


class Calendar {
    constructor(year, month, n) {
        this.year = y
        this.month = m
        this.num = n
    }







}

const calendar1 = new Calendar();
calendars.push(calendar1);