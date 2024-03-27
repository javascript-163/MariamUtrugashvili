const submitCoordinatesButton = document.getElementById("submitCoordinates");
const submitLocationButton = document.getElementById("submitLocation");
const weatherInfoElement = document.getElementById("weatherInfo");

function fetchWeatherData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data.current_weather.temperature;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

function fetchLonLat(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const coordinates = data[0];
            return { lon: coordinates.lon, lat: coordinates.lat };
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

function updateWeatherInfo(temperature) {
    weatherInfoElement.textContent = `Weather: ${temperature}`;
}

function updateWindSpeedImage(src) {
    windSpeedImageElement.src = src;
    windSpeedImageElement.style.display = "block";
}

submitCoordinatesButton.addEventListener('click', async () => {
    try {
        const lon = document.getElementById("longitudeInput").value;
        const lat = document.getElementById("latitudeInput").value;

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,rain,windspeed_10m`;
        
        const temperature = await fetchWeatherData(url);
        updateWeatherInfo(temperature);
    } catch (error) {
        console.error("Failed to get weather data:", error);
    }
});

submitLocationButton.addEventListener('click', async () => {
    try {
        const location = document.getElementById("locationInput").value;
        const url = `https://geocode.maps.co/search?q=${location}`;

        const coordinates = await fetchLonLat(url);

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lon}&current_weather=true&hourly=temperature_2m,relative_humidity_2m,rain,windspeed_10m`;

        const temperature = await fetchWeatherData(weatherUrl);
        updateWeatherInfo(temperature);
    } catch (error) {
        console.error("Failed to get weather data:", error);
    }
});
