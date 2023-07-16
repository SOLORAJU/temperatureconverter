function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnitElement = document.getElementById('toUnit');
    const resultElement = document.getElementById('result');

    let convertedTemperature, resultUnit;

    if (fromUnit === 'celsius') {
        // Convert to Fahrenheit
        convertedTemperature = (temperatureInput * 9/5) + 32;
        resultUnit = '°F';
    } else if (fromUnit === 'fahrenheit') {
        // Convert to Celsius
        convertedTemperature = (temperatureInput - 32) * 5/9;
        resultUnit = '°C';
    } else if (fromUnit === 'kelvin') {
        // Convert to Celsius
        convertedTemperature = temperatureInput - 273.15;
        resultUnit = '°C';
    }

    // Display the converted temperature
    resultElement.textContent = convertedTemperature.toFixed(2);
    toUnitElement.textContent = resultUnit;
}
