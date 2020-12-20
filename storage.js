class Storage {
  constructor() {
    this.city;
    this.country;
  }

  getStorage() {
    if (
      localStorage.getItem('city') == null &&
      localStorage.getItem('country') == null
    ) {
      this.city = 'Lisbon';
      this.country = 'PT';
    } else {
      this.city = localStorage.getItem('city');
      this.country = localStorage.getItem('country');
    }

    return {
      city: this.city,
      country: this.country,
    };
  }

  setStorage(city, country) {
    localStorage.setItem('city', city);
    localStorage.setItem('country', country);
  }
}
