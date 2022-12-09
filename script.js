const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5f8c705be5mshadb0d04f0e64409p1bdd98jsn8159283658ef',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

 submit.addEventListener("click", (e)=>{
  e.preventDefault()
    getWeather(city.value)
})


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Singapore', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloud_pct_s.innerHTML = response.cloud_pct
        temp_s.innerHTML = response.temp
        feels_like_s.innerHTML = response.feels_like
        humidity_s.innerHTML = response.humidity
        min_temp_s.innerHTML = response.min_temp
        max_temp_s.innerHTML = response.max_temp
        wind_speed_s.innerHTML = response.wind_speed
        wind_degrees_s.innerHTML = response.wind_degrees
        sunrise_s.innerHTML = response.sunrise
        sunset_s.innerHTML = response.sunset
    })
    .catch(err => console.error(err));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloud_pct_p.innerHTML = response.cloud_pct
        temp_p.innerHTML = response.temp
        feels_like_p.innerHTML = response.feels_like
        humidity_p.innerHTML = response.humidity
        min_temp_p.innerHTML = response.min_temp
        max_temp_p.innerHTML = response.max_temp
        wind_speed_p.innerHTML = response.wind_speed
        wind_degrees_p.innerHTML = response.wind_degrees
        sunrise_p.innerHTML = response.sunrise
        sunset_p.innerHTML = response.sunset
    })
    .catch(err => console.error(err));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloud_pct_d.innerHTML = response.cloud_pct
        temp_d.innerHTML = response.temp
        feels_like_d.innerHTML = response.feels_like
        humidity_d.innerHTML = response.humidity
        min_temp_d.innerHTML = response.min_temp
        max_temp_d.innerHTML = response.max_temp
        wind_speed_d.innerHTML = response.wind_speed
        wind_degrees_d.innerHTML = response.wind_degrees
        sunrise_d.innerHTML = response.sunrise
        sunset_d.innerHTML = response.sunset
    })
    .catch(err => console.error(err));


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=malaysia', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        cloud_pct_m.innerHTML = response.cloud_pct
        temp_m.innerHTML = response.temp
        feels_like_m.innerHTML = response.feels_like
        humidity_m.innerHTML = response.humidity
        min_temp_m.innerHTML = response.min_temp
        max_temp_m.innerHTML = response.max_temp
        wind_speed_m.innerHTML = response.wind_speed
        wind_degrees_m.innerHTML = response.wind_degrees
        sunrise_m.innerHTML = response.sunrise
        sunset_m.innerHTML = response.sunset
    })
    .catch(err => console.error(err));


