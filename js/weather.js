const API_KEY = "a7a7efc3864c584f4f9db4fd1adf5f2d";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data.name, data.weather[0].main)
            const weatherContatiner = document.querySelector("#weather span:first-child");
            const cityContatiner = document.querySelector("#weather span:last-child");
            cityContatiner.innerText = data.name;
            weatherContatiner.innerText = `${data.weather[0].main} / ${data.main.temp}`
        });
}

function onGeoError() {
    alert("Can't find you. No weather info for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}