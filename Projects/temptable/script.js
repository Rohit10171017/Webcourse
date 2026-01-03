const tableBody = document.querySelector("#weather-tbody");

function addCityWeatherRow(city, temperature) {
  const row = document.createElement("tr");

  const cityCell = document.createElement("td");
  cityCell.innerText = city;
  row.appendChild(cityCell);

  const tempCell = document.createElement("td");
  tempCell.innerText = temperature;
  row.appendChild(tempCell);

  // Set background color based on temperature range with colors
  if (temperature <= 15) {
    row.style.backgroundColor = "#4A90E2";
    cityCell.style.color = "white";
    tempCell.style.colot = "white";
  } else if (temperature <= 25) {
    row.style.backgroundColor = "#7ED321";
    cityCell.style.color = "white";
    tempCell.style.colot = "white";
  } else if (temperature <= 35) {
    row.style.backgroundColor = "#F5A623";
    cityCell.style.color = "white";
    tempCell.style.colot = "white";
  } else if (temperature <= 45) {
    row.style.backgroundColor = "#D0021B";
    cityCell.style.color = "white";
    tempCell.style.colot = "white";
  } else {
    row.style.backgroundColor = "#8B0000";
    cityCell.style.color = "white";
    tempCell.style.colot = "white";
  }

  tableBody.appendChild(row);
}

try {
  addCityWeatherRow("Shimla", 12);
  addCityWeatherRow("Darjeeling", 18);
  addCityWeatherRow("Bangalore", 22);
  addCityWeatherRow("Mumbai", 28);
  addCityWeatherRow("Delhi", 32);
  addCityWeatherRow("Chennai", 42);
  addCityWeatherRow("Ahmedabad", 44);
  addCityWeatherRow("Jaisalmer", 48);
  addCityWeatherRow("Kolkata", 35);
  addCityWeatherRow("Hyderabad", 39);
} catch {
  console.error("Please read the instructions carefully and try again.");
}
