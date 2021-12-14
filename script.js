const apiResult = document.getElementById("apiResult");
const futureResult = document.getElementById("apiFutureResult");
const APIKey = "bb827de844a7d6fffd664986ca5222ea";



// creating buttons in the search history footer for each search result//
// added click function to re-search for that city//
function renderSearchHistory() {
  for (var i = city.length - 1; i >= 0; i--)
  searchHistoryContainer.innerHTML = '';
  var btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.classList.add("history-btn", "btn-history");
  btn.setAttribute("data-search", searchHistory);
  btn.textContent = searchHistory;
  searchHistoryContainer.appendChild(btn);
  displayHistory.push(searchHistory);
  btn.addEventListener("click", resubmitCity);
  }


function appendSearchHistory() {
  for (var i = displayHistory.length; i = 0; i++) {
    renderSearchHistory();
  }
  }


  // added function to re-submit based on clicking a particular history button//
function resubmitCity() {
  event.preventDefault();
  var searchResult = this.getAttribute("data-search");
 function changeCityInput() {
  inputForm.value = searchResult;
 }
 changeCityInput();
 getAPI();
}




function initSearchHistory() {
  var storedHistory = localStorage.getItem("City");
  if (storedHistory) {
    searchHistory = storedHistory;
      console.log("initSearchHistory worked"
      );
      renderSearchHistory();
  } 
  }

var city = []; 
var searchHistory = [];
var displayHistory = [];
var searchHistoryContainer = document.getElementById("history");




// set local storage and display chose city for reference////////////////////////////////
function getCity() {
    var city = document.getElementById("inputForm").value.trim();
    localStorage.setItem("City", city);
    console.log(city);
    var cityDisplay = document.getElementById("result");
    cityDisplay.innerHTML = city;
  }
  
  // made all functions run when you click submit. The functions display the city, get the API results for that city, and puts it in local storage////////////
  var submit = document.getElementById("submitBtn");
  submit.addEventListener("click", function () {
    getCity();
    getAPI();
    get5Day();
    initSearchHistory();
  });
  




// calls the API//
function getAPI() {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" + inputForm.value + "&units=imperial&appid=bb827de844a7d6fffd664986ca5222ea";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);

        apiResult.textContent = '';
      
        // creates an li for each category of weather requested.//
      var apiIcon = document.createElement("li");
      
      apiIcon.textContent = data.weather[0].icon;

      //then use apiIcon's code (03d) to input that into the html lookup for the icon on OpenWeather.org//
      apiResult.appendChild(apiIcon);

      var apiDescription = document.createElement("li");
      apiDescription.textContent = data.weather[0].description;
      apiResult.appendChild(apiDescription);

      var apiTemp = document.createElement("li");
      apiTemp.textContent = data.main.temp + " degrees";
      apiResult.appendChild(apiTemp);

      var apiHumidity = document.createElement("li");
      apiHumidity.textContent = data.main.humidity + " relative humidity";
      apiResult.appendChild(apiHumidity);

      var apiWind = document.createElement("li");
      apiWind.textContent = data.wind.speed + " mph windspeed";
      apiResult.appendChild(apiWind);
      
      var apiUV = document.createElement("li");
      apiUV.textContent = "Can't find UV index under API data";
      apiResult.appendChild(apiUV);
    });
    } 

// gets the 5day results from the API//
  function get5Day() {
    var city = document.getElementById("inputForm").value.trim();
    console.log(city);
    var city5Day = document.getElementById("result2");
    city5Day.innerHTML = city;
    }









