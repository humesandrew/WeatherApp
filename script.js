// var APIKey = "bb827de844a7d6fffd664986ca5222ea";

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

const apiResult = document.getElementById("apiResult");
const APIKey = "bb827de844a7d6fffd664986ca5222ea";

function getAPI() {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=bb827de844a7d6fffd664986ca5222ea";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      // console.log(data.weather[0].description);

      var apiIcon = document.createElement("li");
      apiIcon.textContent = data.weather[0].icon;

      //then use apiIcon's code (03d) to input that into the html lookup for the icon on OpenWeather.org//
      apiResult.appendChild(apiIcon);

      var apiDescription = document.createElement("li");
      apiDescription.textContent = data.weather[0].description;
      apiResult.appendChild(apiDescription);

      var apiTemp = document.createElement("li");
      apiTemp.textContent = data.main.temp;
      apiResult.appendChild(apiTemp);

      var apiHumidity = document.createElement("li");
      apiHumidity.textContent = data.main.humidity;
      apiResult.appendChild(apiHumidity);

      var apiWind = document.createElement("li");
      apiWind.textContent = data.wind.speed;
      apiResult.appendChild(apiWind);
      
      var apiUV = document.createElement("li");
      apiUV.textContent = "Can't find UV index under API data";
      apiResult.appendChild(apiUV);
     
    });
}



 //maybe this is better to use moment to display date//
      // var myDate = new Date(1638311431*1000);
      // console.log(myDate.toLocaleString());



function getCity() {
  var city = document.getElementById("form").value;
  localStorage.setItem("City", city);
  console.log(city);

  var cityDisplay = document.getElementById("result");
  cityDisplay.innerHTML = city;
}

var submit = document.getElementById("submitBtn");
submit.addEventListener("click", function () {
  getCity();
  getAPI();
});


