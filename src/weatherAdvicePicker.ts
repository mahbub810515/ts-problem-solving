type Weather="sunny"|"rainy"|"cloudy";

const getWeatherAdvice=(weather:Weather)=>{
    if(weather==="sunny") return "Wear sunscreen"
    if(weather==="rainy") return "Carry an umbrella"
    if(weather==="cloudy") return "Bring a light jacket"
}

console.log(getWeatherAdvice("sunny"))
console.log(getWeatherAdvice("rainy"))
console.log(getWeatherAdvice("cloudy"))