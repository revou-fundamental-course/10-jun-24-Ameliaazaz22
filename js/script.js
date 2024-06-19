// js/script.js

// Function to convert Celsius to Fahrenheit
function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celciusInput').value;
    if (celsiusInput === '') {
        alert('Masukkan nilai suhu dalam Celcius.');
        return;
    }
    
    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheitInput').value = fahrenheit.toFixed(2);
    document.getElementById('calculationSteps').value = ${celsius} * 9/5 + 32 = ${fahrenheit.toFixed(2)};
}

// Function to reset all fields
function resetFields() {
    document.getElementById('celciusInput').value = '';
    document.getElementById('fahrenheitInput').value = '';
    document.getElementById('calculationSteps').value = '';
}

// Function to reverse conversion from Fahrenheit to Celsius
function reverseConversion() {
    const fahrenheitInput = document.getElementById('fahrenheitInput').value;
    if (fahrenheitInput === '') {
        alert('Masukkan nilai suhu dalam Fahrenheit.');
        return;
    }

    const fahrenheit = parseFloat(fahrenheitInput);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celciusInput').value = celsius.toFixed(2);
    document.getElementById('calculationSteps').value = (${fahrenheit} - 32) * 5/9 = ${celsius.toFixed(2)};
}