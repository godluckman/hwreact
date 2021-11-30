export class WheatherWidget {
    constructor() {
        this.url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=ru&appid=0f5f61647ce2ea9ac2c7ae72d9fc0e5a`;
        this.urlCurrent = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=ru&appid=0f5f61647ce2ea9ac2c7ae72d9fc0e5a`;
        this.urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=Minsk&lang=ru&appid=0f5f61647ce2ea9ac2c7ae72d9fc0e5a`;

    }

    getWeather() {
        document.querySelector('body').innerHTML += `<img class='loader' style="position: fixed; right: 1em; background: #b0e9ffbd; height: 250px; border-radius: 3px;" src="./loader.gif"></img>`
        fetch(this.url)
            .then(function(response) { return response.json() })
            .then((data) => {
                document.querySelector('.loader').remove();
                if (this.url === this.urlCurrent) {
                    this.render(data);
                } else {
                    this.forecast(data);
                }
            })
    }

    formatData(data) {
        this.temp = (Math.round(data.main.temp - 273) + '&deg;C');
        this.description = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);
        this.icon = data.weather[0].icon;
        this.wind = Math.round(data.wind.speed) + ' м/с';
    }

    render(data) {
        this.formatData(data);

        this.body = document.querySelector('body')
        this.body.innerHTML = `<article class="box weather" style="position: fixed; z-index: 99; right: 1em; background: #b0e9ffbd; padding: 1em; border-radius: 3px; box-shadow: 0px 1px 7px rgba(0,0,0, 0.25);">
                                                    <span class="close" style="color: white; font: icon; font-size: 25px; cursor: pointer;">&times;</span>
                                                    <button class="forecast" style="left:0; margin-left: 4em; background: #b0e9ffbd;">Прогноз на 3 дня</button>
                                                    <div class="icon bubble black">
                                                      <div>
                                                        <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png">
                                                      </div>
                                                    </div>
                                                    <div>Сейчас в городе ${data.name} ${this.temp}.</div>
                                                    </br>
                                                    <div>${this.description}. Ветер: ${this.wind}.</div>
                                                    </br>
                                                    </article>`;

        this.buttonsHandler();
    }

    buttonsHandler() {
        const box = document.querySelector('.box');
        const span = document.querySelector('.close');
        span.onclick = () => {
            box.style.display = "none";
        }
        const buttonForecast = document.querySelector('.forecast');
        buttonForecast.onclick = () => {
            box.style.display = "none";
            this.url = this.urlForecast;
            this.getWeather();
        }
    }

    forecast(data) {
        console.log(data);
        const offset = +(new Date).toLocaleTimeString(navigator.language, { hour: '2-digit' }) - 12;
        console.log(offset);
        const days = [data.list[0 + offset], data.list[8 + offset], data.list[16 + offset]]
        console.log(days);
        const nextdays = ['Сегодня', 'Завтра', 'Послезавтра'];
        let i = 0;
        const container = document.createElement("DIV");
        container.style.position = 'fixed';
        container.style.right = '1em';
        container.style.background = '#b0e9ffbd';
        container.style.borderRadius = '3px';
        container.style.padding = '1em';
        container.innerHTML += `<button class="back" style="background:#b0e9ffbd; border-radius: 3px;" ><--</button>`
        document.querySelector('body').appendChild(container);

        for (let day of days) {
            this.formatData(day);
            container.innerHTML += `<div style="">${nextdays[i++]} в городе ${data.city.name} ${this.temp} <img style="height:50px; vertical-align:middle" src="http://openweathermap.org/img/wn/${this.icon}@2x.png"> ${this.description}. Ветер: ${this.wind} <hr></div>`;
        }

        const buttonBack = document.querySelector('.back');
        buttonBack.onclick = () => {
            document.querySelector('.box').style.display = 'block'
            container.remove();
            this.buttonsHandler();
        }
    }

}