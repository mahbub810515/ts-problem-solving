"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getWeatherAdvice = (weather) => {
    if (weather === "sunny")
        return "Wear sunscreen";
    if (weather === "rainy")
        return "Carry an umbrella";
    if (weather === "cloudy")
        return "Bring a light jacket";
};
console.log(getWeatherAdvice("sunny"));
console.log(getWeatherAdvice("rainy"));
console.log(getWeatherAdvice("cloudy"));
//# sourceMappingURL=weatherAdvicePicker.js.map