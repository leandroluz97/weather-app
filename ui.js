class UI {
  constructor() {
    this.location = document.querySelector('#city');
    this.time = document.querySelector('#time');
    this.temperature = document.querySelector('#temperature');
    this.desc = document.querySelector('#desc');
    this.feelsLike = document.querySelector('#feelsLike');
    this.humidity = document.querySelector('#humidity');
    this.tempMax = document.querySelector('#tempMax');
    this.tempMin = document.querySelector('#tempMin');
    this.wind = document.querySelector('#wind');
  }

  showWeather(weather) {
    this.location.textContent = `${weather.name}`;

    // this.time.textContent= `${}`
    this.temperature.textContent = `${Math.round(weather.main.temp)}`;
    this.desc.textContent = `${weather.weather[0].description}`;
    this.feelsLike.textContent = `Feels Like: ${Math.round(
      weather.main.feels_like
    )}`;
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
    this.tempMax.textContent = `Max temperture: ${Math.round(
      weather.main.temp_max
    )}`;
    this.tempMin.textContent = `Min temperture: ${Math.round(
      weather.main.temp_min
    )}`;
    this.wind.textContent = `Wind: ${weather.wind.speed}km/h`;
  }
}
