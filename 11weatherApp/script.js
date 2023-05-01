// This creates an object called api that contains an API key and a base URL for the OpenWeatherMap API.
const api = {
    key: "02614ed0a83c25f8a6168efd5044c37c",
    base: "https://api.openweathermap.org/data/2.5/"
};

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', setQuery);

function setQuery (evt) {
    if(evt.keyCode === 13) {
        getResult(searchBox.value)
    }
}

// This function fetches weather data from the OpenWeatherMap API by constructing a URL with the api.key and api.base variables, as well as the query parameter passed to it. It then converts the response to JSON and passes it to the displayResults function.
function getResult (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

// This function takes the weather object passed to it, and sets the text content of several HTML elements to display the weather information. It also logs the weather object to the console.
function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
}

// This function takes a Date object d and constructs a string in the format "day date month year" (e.g. "Monday 26 April 2023") using the getDay, getDate, getMonth, and getFullYear methods of the Date object. The string is then returned.
function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}