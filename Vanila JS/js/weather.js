const API_key = "88f72aaa2f5b8bdda157baf6e4e37eb6";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innertext = data.name;
            weather.innertext = `${data.weather.main}/${data.main.temp}`;
    });
}

function onGeoError(){
    alert("cant find u, no weatehr for u");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
