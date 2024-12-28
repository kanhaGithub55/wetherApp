const button = document.getElementById("button-search");
const input = document.getElementById("city-input")

const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")
const feelslike = document.getElementById("feellike")

async function getData(cityName) {
    const promise = await fetch(
        
        `http://api.weatherapi.com/v1/current.json?key=dcf38edfab104823984125627240612&q=${cityName}&aqi=yes`
        );

        return await promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value)
    cityName.innerText = `${result.location.name}, ${result.location.region} -- ${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = `${result.current.temp_c}\u00B0C `;
    feelslike.innerText = `Feelslike  ${result.current.feelslike_c}\u00b0C`
})



