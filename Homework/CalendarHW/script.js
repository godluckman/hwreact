let date,
    calendars = [],
    count = 0;
const montharr = ['Выбрать месяц', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const yeararr = ['Выбрать год'];
for (let i = 1980; i <= new Date().getFullYear(); i++) {
    yeararr.push(i);
}

const gotSelectYear = document.querySelector("#select-year");
const gotSelectMonth = document.querySelector("#select-month");


function selectCreate(elem, arr) {
    for (let i = 0; i < arr.length; i++) {
        let opt = arr[i];
        let nElem = document.createElement("option");
        nElem.textContent = opt;
        nElem.value = opt;
        elem.appendChild(nElem);
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
const container = document.querySelector('.container');

createButton.addEventListener('click', function() {
    document.querySelector('.deletebutton').disabled = false
    calendars.push(new Calendar(date, count++));
});

deleteButton.addEventListener('click', function() {
    if (container.firstChild) {
        calendars.shift();
        container.removeChild(container.firstChild);
    } else {
        document.querySelector('.deletebutton').disabled = true;
    }
});





class Calendar {
    constructor(date, num) {
        this.date = date;
        this.num = num;
        this.createCalendar(date);
    }

    createCalendar() {
        const container = document.querySelector('.container') // '.container${this.num}'
        let sample = `<div class="calendar calendar${this.num}">
                    <div class="month">
                        <i class="fas fa-angle-double-left prev-year prev-year${this.num}"></i>
                        <i class="fas fa-angle-left prev prev${this.num}"></i>
                        <div class="date date${this.num}">
                            <h1 class="h${this.num}"></h1>
                            <p class="p${this.num}"></p>
                        </div>
                        <i class="fas fa-angle-right next next${this.num}"></i>
                        <i class="fas fa-angle-double-right next-year next-year${this.num}"></i>
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
                    <div class="days days${this.num}"></div>
                    </div>`;
        container.insertAdjacentHTML("beforeend", sample);

        document.querySelector(`.prev${this.num}`).addEventListener('click', () => {
            this.date.setMonth(this.date.getMonth() - 1);
            this.renderCalendar();
        });

        document.querySelector(`.next${this.num}`).addEventListener('click', () => {
            this.date.setMonth(this.date.getMonth() + 1);
            this.renderCalendar();
        });

        document.querySelector(`.prev-year${this.num}`).addEventListener('click', () => {
            this.date.setFullYear(this.date.getFullYear() - 1);
            this.renderCalendar();
        });

        document.querySelector(`.next-year${this.num}`).addEventListener('click', () => {
            this.date.setFullYear(this.date.getFullYear() + 1);
            this.renderCalendar();
        });
        this.renderCalendar();


    }

    renderCalendar() {
        this.date.setDate(1);
        const monthDays = document.querySelector(`.days${this.num}`);
        const lastDay = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        const prevLastDay = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        const firstDayIndex = this.date.getDay() - 1;

        const lastDayIndex = new Date(
            this.date.getFullYear(),
            this.date.getMonth() + 1,
            0
        ).getDay();

        const nextDays = 7 - lastDayIndex - 1;
        const months = montharr.slice(1);

        document.querySelector(`.h${this.num}`).innerHTML = months[this.date.getMonth()];
        document.querySelector(`.p${this.num}`).innerHTML = `${this.date.getFullYear()} год`;

        let days = '';

        for (let x = firstDayIndex; x > 0; x--) {
            days += `<div class='prev-date prev-date${this.num}'>${prevLastDay - x + 1}</div>`;
        }

        for (let i = 1; i <= lastDay; i++) {
            days += `<div class='current current${this.num}'>${i}</div>`;
        }

        for (let j = 1; j <= nextDays + 1; j++) {
            days += `<div class='next-date next-date${this.num}'>${j}</div>`;
            monthDays.innerHTML = days;
        }
        this.highlight()
    }

    highlight() {
        let currenDays = document.querySelector(`.days${this.num}`);
        let check = [];
        currenDays.onclick = function(event) {
            let target = event.target;
            check.push(target);
            checkandhighlight(target, check);
        };

        function checkandhighlight(elem, check) {
            let currentDays = [...document.querySelectorAll(`.current`)]
            if (!currentDays.includes(elem)) { check.pop(); return }
            if (check.length > 1) {
                let prevTarget = check[0]
                prevTarget.classList.remove('today');
                check.shift();
            }
            elem.classList.add('today');
            console.log(check);
        }
    }
}