function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unitInput = document.querySelector('input[name="unit"]:checked').value;
    let result = null;
  
    if (unitInput === "fahrenheit") {
      // Fahrenheit to Celsius conversion
      result = ((temperatureInput - 32) * 5 / 9).toFixed(2) + "°C";
    } else if (unitInput === "celsius") {
      // Celsius to Fahrenheit conversion
      result = (temperatureInput * 9 / 5 + 32).toFixed(2) + "°F";
    }
  
    document.getElementById("result").innerHTML = result;
  }
  