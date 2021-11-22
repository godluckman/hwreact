let date;
const montharr = ['Выбрать месяц', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const yeararr = ['Выбрать год'];
for (let i = 1980; i <= new Date().getFullYear(); i++) {
    yeararr.push(i);
}

const gotSelectYear = document.querySelector("#select-year");
const gotSelectMonth = document.querySelector("#select-month");

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

const dataSet = () => {
    if (gotSelectMonth.value !== 'Выбрать месяц' && gotSelectYear.value !== 'Выбрать год') {
        document.querySelector('.createbutton').disabled = false;
        year = gotSelectYear.value;
        month = montharr.indexOf(gotSelectMonth.value) - 1;
        date = new Date(year, month);
    } else {
        document.querySelector('.createbutton').disabled = true;
    }
}

gotSelectMonth.addEventListener("change", dataSet);
gotSelectYear.addEventListener("change", dataSet);


const createButton = document.querySelector('.createbutton');
const deleteButton = document.querySelector('.deletebutton');

createButton.addEventListener('click', function() {
    document.querySelector('.deletebutton').disabled = false
    createTemplate();
    renderCalendar();
});

deleteButton.addEventListener('click', function() {

});




const createTemplate = () => {
    const container = document.querySelector('.container') // '.container${this.num}'
    let sample = `<div class="calendar">
                <div class="month">
                    <i class="fas fa-angle-double-left prev-year"></i>
                    <i class="fas fa-angle-left prev"></i>
                    <div class="date">
                        <h1></h1>
                        <p></p>
                    </div>
                    <i class="fas fa-angle-right next"></i>
                    <i class="fas fa-angle-double-right next-year"></i>
                </div>
                <div class="weekdays">
                    <div>Пн</div>
                    <div>Вт</div>
                    <div>Ср</div>
                    <div>Чт</div>
                    <div>Пт</div>
                    <div>Сб</div>
                    <div>Вс</div>
                </div>
                <div class="days"></div>
                </div>`;
    container.insertAdjacentHTML("beforeend", sample);
}


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
    const months = montharr.slice(1);


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

};

////////////////////////////////////////////////////////////////////////////

const calendars = [];
const count = 0;


class Calendar {
    constructor(date, n) {
        this.num = num;
        this.createCalendar();
        this.date = date;
    }







}

const calendar1 = new Calendar(date, count);
calendars.push(calendar1);