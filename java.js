function validateInput() {
    var inputField = document.getElementById("temperatureInput");
    inputField.value = inputField.value.replace(/[^0-9.]/g, ''); // Allow only numbers and dots
}

function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect");
    var selectedUnit = unitSelect.options[unitSelect.selectedIndex].value;
    var resultArea = document.getElementById("resultArea");

    if (temperatureInput === "") {
        resultArea.innerHTML = "Please enter a temperature.";
        return;
    }

    var temperature = parseFloat(temperatureInput);
    var convertedTemperature;

    if (selectedUnit === "celsius") {
        convertedTemperature = convertToFahrenheit(temperature);
        resultArea.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " °F";
    } else if (selectedUnit === "fahrenheit") {
        convertedTemperature = convertToCelsius(temperature);
        resultArea.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " °C";
    } else if (selectedUnit === "kelvin") {
        convertedTemperature = convertToKelvin(temperature);
        resultArea.innerHTML = "Converted Temperature: " + convertedTemperature.toFixed(2) + " K";
    }
}

function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertToKelvin(celsius) {
    return celsius + 273.15;
}
