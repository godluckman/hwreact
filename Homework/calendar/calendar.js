let month = prompt('Введите номер месяца');
let year = prompt('Введите год');

let firstDay = (new Date(year, month)).getDay();
monthAndYear = document.getElementById("monthAndYear");
months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

function daysInMonth(mYear, mMonth) {
    return 32 - new Date(mYear, mMonth, 32).getDate();
}

function monthYear(year, month) {
    monthAndYear.innerHTML = months[month] + " " + year;
}

monthYear(year, month);


tbl = document.getElementById("calendar-body");

tbl.innerHTML = "";

let date = 1;
for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");

    for (let j = 1; j < 8; j++) {
        if (i === 0 && j < firstDay) {
            cell = document.createElement("td");
            cellText = document.createTextNode("");
            cell.appendChild(cellText);
            row.appendChild(cell);
        } else if (date > daysInMonth(month, year)) {
            break;
        } else {
            cell = document.createElement("td");
            cellText = document.createTextNode(date);
            cell.appendChild(cellText);
            row.appendChild(cell);
            cell.className = 'ctd';
            date++;
        }


    }

    tbl.appendChild(row);
}



// class Calendar {
//     constructor(month, year) {
//         this.month = month;
//         this.year = year
//     }

//     getCalendar() {

//     }

//     daysInMonth(mYear, mMonth) {
//         return 32 - new Date(mYear, mMonth, 32).getDate();
//     }

//     monthYear(year, month) {
//         monthAndYear.innerHTML = months[month] + " " + year;
//     }
// }