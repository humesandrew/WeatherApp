// var APIKey = "bb827de844a7d6fffd664986ca5222ea";

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


const APIKey = "bb827de844a7d6fffd664986ca5222ea";

function getAPI() {

var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=bb827de844a7d6fffd664986ca5222ea";
fetch(requestUrl)
.then(function (response) {
    return response.json(); 
})

.then(function (data) {
    console.log(data);
    console.log(data.weather);
})
};










function getCity() {
    var city = document.getElementById("form").value;
localStorage.setItem("City", city);
console.log(city);

var cityDisplay = document.getElementById("result");
cityDisplay.innerHTML = city;

};

var submit = document.getElementById("submitBtn");
submit.addEventListener("click", function() {
    getCity();
});

getAPI();
