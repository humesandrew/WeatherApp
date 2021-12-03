// var APIKey = "bb827de844a7d6fffd664986ca5222ea";

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

const apiResult = document.getElementById("apiResult");
const futureResult = document.getElementById("apiFutureResult");
const APIKey = "bb827de844a7d6fffd664986ca5222ea";
var city; 



//just working on search history to display as buttons here, under footer (class history)//
var searchHistory = [];
var displayHistory = [];
var searchHistoryContainer = document.getElementById("history");

function renderSearchHistory() {
  searchHistoryContainer.innerHTML = '';
  // for (var i = displayHistory.length - 1; i >= 0; i--) 
  
  var btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.classList.add("history-btn", "btn-history");
  btn.setAttribute("data-search", searchHistory);
  btn.textContent = searchHistory;
  searchHistoryContainer.appendChild(btn);
  displayHistory.push(searchHistory);

  // for (var i = displayHistory.length; i >= 0; i++) {
  //   searchHistoryContainer.appendChild(displayHistory[i]);
  }
// }


function appendSearchHistory() {
  for (var i = displayHistory.length; i = 0; i++) {
    renderSearchHistory();
  }
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

// initSearchHistory();













function getCity() {
    var city = document.getElementById("inputForm").value.trim();
    localStorage.setItem("City", city);
    console.log(city);
    var cityDisplay = document.getElementById("result");
    cityDisplay.innerHTML = city;
  }
  
  var submit = document.getElementById("submitBtn");
  submit.addEventListener("click", function () {
    getCity();
    getAPI();
    get5Day();
    initSearchHistory();
    // get5DayAPI();//
  });
  



function getAPI() {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=bb827de844a7d6fffd664986ca5222ea";
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


  function get5Day() {
    var city = document.getElementById("inputForm").value.trim();
    console.log(city);
    var city5Day = document.getElementById("result2");
    city5Day.innerHTML = city;
  }



// function get5DayAPI() {
//     var requestUrl = "https://api.openweathermap.org/data/2.5/forecast/daily?q=Denver&cnt=5&appid=464fc1b74edd3c4f575142ad8096fa53";

//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
  
//       .then(function (data) {
//         console.log(data);
//         // console.log(data.weather[0].description);
  
//         var apiIcon = document.createElement("li");
//         apiIcon.textContent = data.weather[0].icon;
  
//         //then use apiIcon's code (03d) to input that into the html lookup for the icon on OpenWeather.org//
//         futureResult.appendChild(apiIcon);
  
//         var apiDescription = document.createElement("li");
//         apiDescription.textContent = data.weather[0].description;
//         futureResult.appendChild(apiDescription);
  
//         var apiTemp = document.createElement("li");
//         apiTemp.textContent = data.main.temp;
//         futureResult.appendChild(apiTemp);
  
//         var apiHumidity = document.createElement("li");
//         apiHumidity.textContent = data.main.humidity;
//         futureResult.appendChild(apiHumidity);
  
//         var apiWind = document.createElement("li");
//         apiWind.textContent = data.wind.speed;
//         futureResult.appendChild(apiWind);
        
//         var apiUV = document.createElement("li");
//         apiUV.textContent = "Can't find UV index under API data";
//         futureResult.appendChild(apiUV);
       
//       });
//   }

 //maybe this is better to use moment to display date//
      // var myDate = new Date(1638311431*1000);
      // console.log(myDate.toLocaleString());





