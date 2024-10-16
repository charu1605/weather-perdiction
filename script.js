document.addEventListener('DOMContentLoaded', () =>{
const inputbox=document.querySelector('.box');
const searchbutton=document.getElementById('search-but');
const weatimg=document.querySelector('.cloud');
const temperature=document.querySelector('.temp');
const description=document.querySelector('.desc');
const humidity=document.getElementById('humidity');
const windspeed=document.getElementById('wind-speed');
const location=document.querySelector('.notfound');
const we_body=document.querySelector('.weat-body')
async function checkweather(city){
    const apikey="ca685beebd2d815d9d35e4947c44a2a5";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const data=await fetch(`${url}`).then(response => response.json());
    if(data.cod==='404'){
        location.style.display="flex";
        we_body.style.display="none";
        console.log("error");
        return;
    }
    location.style.display="none";
    we_body.style.display="flex";
    temperature.innerHTML=`${Math.round(data.main.temp-273.15)}°C`;
    humidity.innerHTML=`${data.main.humidity}%`;
    description.innerHTML=`${data.weather[0].description}`;
    windspeed.innerHTML=`${data.wind.speed}Km/H`;
    switch(data.weather[0].main){
        case 'Clouds':
            weatimg.src="/images/cloud.png";
            break;
        case 'Clear':
             weatimg.src="/images/clear.png";
             break;
         case 'Mist':
            weatimg.src="/images/cloud.png";
            break;
        case 'Rain':
            weatimg.src="/images/rain.png";
            break;
        case 'Snow':
            weatimg.src="/images/snow.png";
            break;
            
    }
    
    console.log(data);
}
searchbutton.addEventListener('click',()=>{
    checkweather(inputbox.value);
});
});
