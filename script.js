//const cityE1 = document.querySelector("city-name");

const tempE1 = document.querySelector("temperature");
const currentWind = document.querySelector("wind-speed");
const inputE1 = document.querySelector("city-input")
const searchCity = document.querySelector("search-City")
var sCity =[];
var city =" ";

function find(c){
  for (var i=0; i<sCity.length; i++){
      if(c.toUpperCase()===sCity[i]){
          return -1;
      }
  }
  return 1;
} 

// API Key
var APIKey = "9e2a809291b8f7d8b0572c6dedc86051";
var cityID = document.getElementById("#search-value");

function displayWeather(event){
  event.preventDefault();
  if(searchCity.val().trim()!==""){
      city=searchCity.val().trim();
      getWeather(city);
  }
}

function getWeather (cityname) {

  var queryURL = "http://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&appid=" + APIKey;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) { // We store all of the retrieved data inside of an object called "response"

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // Transfer content to HTML
      $(".city").text("City: " + response.name);
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp").text("Temperature (F) " + response.main.temp);
      $(".index").text("Index: " + response.main.index);

      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + tempF);

    });

  // let queryURL = "http://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&appid=" + APIKey;
  // .then(function(response) {
  //   console.log(response)
  // });

}

//var queryURL = "http://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&appid=" + APIKey;
    
function clearHistory(event){
  event.preventDefault();
  sCity=[];
  localStorage.removeItem("cityname");
  document.location.reload();

}
