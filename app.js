const weather = new Weather();
const ui = new UI();
const storage = new Storage();

//Ui variables
const form = document.querySelector('#form');
const edit = document.querySelector('#edit');
const modal = document.querySelector('#modal');
const btn = document.querySelector('#submit');

//Event handler
edit.addEventListener('click', editLocation);
modal.addEventListener('click', hideModal);
document.addEventListener('DOMContentLoaded', onLoaded);
btn.addEventListener('click', newLocation);

//show modal
function editLocation(e) {
  modal.classList.add('show');
}

//hide modal
function hideModal(e) {
  if (e.target == modal) {
    modal.classList.remove('show');
  }
}

//Get Weather
function getWeather() {
  weather
    .getWeather()
    .then((data) => {
      if (data.responseWeather.cod !== 404) {
        ui.showWeather(data.responseWeather);

        //Save locations on Local Storage
        storage.setStorage(
          data.responseWeather.name,
          data.responseWeather.sys.country
        );
      }
    })
    .catch((err) => console.log(err));
}

//On loaded functions
function onLoaded(e) {
  // Values from local storage
  const valueStore = storage.getStorage();

  //change the locations
  weather.changeLocation(valueStore.city, valueStore.country);

  //print temperature on screen
  getWeather();
}

//new locations
function newLocation(e) {
  e.preventDefault();

  // new locations
  const city = document.querySelector('#cityName').value;
  const country = document.querySelector('#countryName').value;

  if (city !== '' && country !== '') {
    //change de loctions
    weather.changeLocation(city, country);

    //Print temperature on screen
    getWeather();

    //close the modal
    modal.classList.remove('show');
  }
}
