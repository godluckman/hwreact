class WheatherWidget {
    constructor() {}

    getWeather() {
        let url1 = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=ru&appid=0f5f61647ce2ea9ac2c7ae72d9fc0e5a`
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=Minsk&lang=ru&appid=0f5f61647ce2ea9ac2c7ae72d9fc0e5a`
        fetch(url)
            .then(function(response) { return response.json() })
            .then((data) => {
                this.forecast(data);
            })
            .catch(function() {
                //catch errors
            });
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
                                                    <button class="forecast" style="left:0; margin-left: 20px;">Прогноз на 3 дня</button>
                                                    <div class="icon bubble black">
                                                      <div>
                                                        <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png">
                                                      </div>
                                                    </div>
                                                    <div>Сейчас в Минске ${this.temp}</div>
                                                    </br>
                                                    <div>${this.description}. Ветер: ${this.wind}</div>
                                                    </br>
                                                    
                                                    </article>`;

        this.buttonsHandler();
    }

    buttonsHandler() {
        const box = document.querySelector('.box');
        const span = document.querySelector('.close');
        span.onclick = function() {
            box.style.display = "none";
        }
        const buttonForecast = document.querySelector('.forecast');
        buttonForecast.onclick = function() {
            box.style.display = "none";
            forecast();
        }
    }

    forecast(data) {
        const days = [data.list[0], data.list[8], data.list[16]]
        console.log(days);
        const container = document.createElement("DIV");
        container.style.position = 'fixed';
        container.style.right = '1em';
        document.querySelector('body').appendChild(container);
        for (let day of days) {
            this.formatData(day);
            container.innerHTML += `<div style="background: #b0e9ffbd;">${this.temp} <img style="height:50px; vertical-align:middle" src="http://openweathermap.org/img/wn/${this.icon}@2x.png"> ${this.description}. Ветер: ${this.wind} </div>`;
        }

    }







}

new WheatherWidget().getWeather();