var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add')
var city = document.querySelector('#cityinput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = '0983dae215d13efb126356eb8a18fada'
function convertion(val){
    return (val - 273).toFixed(3)
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then (res => res.json())
 
    .then(data => 
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempatrue = data['main']['temp']
        var wndspeed = data['wind']['speed']
        
        city.innerHTML = `weather of <span>${nameval} </span>`
        temp.innerHTML = `Tempearture : <span> ${convertion(tempatrue)} C</span>`
        description.innerHTML = `Sky Conditions: <span> ${descrip} </span>`
        wind.innerHTML = `Wind speed : <span> ${wndspeed} km/h </span>` 

    })

    .catch(err => alert('You entered wrong city name'))
})