const searchBox = document.querySelector("#search-bar");
const searchBtn = document.querySelector("#search-icon");


const apiKey = "32dc7a700f52300491cac205289e56b5";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function fetchData() {
    const response = await fetch(apiURL + `&appid=${apiKey}`);
    var data = await response.json();

    const temp = document.querySelector("#temp");
    const city = document.querySelector("#city");
    const wind = document.querySelector("#wind");
    const humidity = document.querySelector("#humidity")

    temp.textContent = data.main.temp + '\u00B0' + 'C';
    city.textContent = data.name;
    wind.textContent = data.wind.speed + 'km/h';
    humidity.textContent = data.main.humidity + '%';
}

searchBtn.addEventListener("click", () => {
    if(searchBox.value != '') {
        apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
        apiURL += `&q=${searchBox.value}`;
        fetchData();
    }
})

