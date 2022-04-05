//current Date
let now = new Date();
let date = now.getDate();
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day}: ${month}/ ${date}/ ${year}`;

// Search + local weather
function showCityTemperature(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#low-temp").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#high-temp").innerHTLM = Math.round(
    response.data.main.temp_max
  );
}

function searchCity(city) {
  let apiKey = "1ebc2ff87b146b313169d2625aff59c1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCityTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city").value;
  searchCity(city);
}

function searchLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "1ebc2ff87b146b313169d2625aff59c1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCityTemperature);
}

function showCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", handleSubmit);

let citySearch = document.querySelector("#city-form");
citySearch.addEventListener("click", handleSubmit);

let currentLocationButton = document.querySelector("#location-button");
currentLocationButton.addEventListener("click", showCurrentLocation);

searchCity("Berlin");
