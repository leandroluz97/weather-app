class Weather {
  constructor(city, country) {
    this.city = city;
    this.country = country;
    this.api_key = '64bc57974ce10e3404e033322c89715d';
  }

  async getWeather() {
    const weather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.api_key}&units=metric`
    );

    const responseWeather = await weather.json();

    return {
      responseWeather: responseWeather,
    };
  }

  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
