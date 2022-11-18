window.addEventListener('DOMContentLoaded', function(){ 

    let locbtn = this.document.getElementById("loc-btn")
    let loc = document.getElementById("loc");
    let errMsg = document.getElementById("errMsg");

    if (loc.value == '') {
        errMsg.innerHTML = '<p>Please enter into the search bar</p><button id="searchbtn" disabled>Disabled</button>'
    } else {
        errMsg.innerHTML = '<button id="searchbtn">Search</button>'
    }

    function WeatherCast(){
        let api = 'https://weatherdbi.herokuapp.com/data/weather/'

        fetch(api+loc.value.replace(' ',''))
        .then(function(res){
        return res.json();      
        })
        .then(function(jsonData){
            if (!jsonData.status) {
                let tForecast = ""
                tForecast+= "<div class='wForecast'>"
                tForecast+= "<h3 id='day'>" + jsonData.currentConditions.dayhour + "</h3>"
                tForecast+= "<p id='icon'>"+ jsonData.currentConditions.comment +"<img src=" + jsonData.currentConditions.iconURL   + "></p>"
                tForecast+= "<p id='temp'>Temperature: " + jsonData.currentConditions.temp.f + "°F, Humidity: " +    jsonData.currentConditions.humidity + ", Wind: " + jsonData.currentConditions.wind.mile +  " mph</p>"
                tForecast+= "</div>"  

                document.getElementById("currentTemp").innerHTML = tForecast;

                let r = document.getElementById("region");
    
                r.innerHTML = jsonData.region;
    
                let nextForecast = ""

                for (var seven of jsonData.next_days.slice(1)) {

                    nextForecast+= "<div class='wForecast'>"
                    nextForecast+= "<h3 id='day'>" + seven.day + "</h3>"
                    nextForecast+= "<p id='icon'>"+ seven.comment +"<img src=" + seven.iconURL   + "></p>"
                    nextForecast+= "<p id='maxmin'> Max Temp: " + seven.max_temp.f + "°F , Min Temp: " +  seven.min_temp.f + "°F</p>"
                    nextForecast+= "</div>"                    
                }
                    document.getElementById("nextTemp").innerHTML = nextForecast;
            } else {
                let r = document.getElementById("region");
                r.innerHTML = '<h3> Error  : ' + jsonData.message + ' </h3>';
                document.getElementById("currentTemp").innerHTML = "";
                document.getElementById("nextTemp").innerHTML = "";
            }
            
        })
        .catch(error => console.log(error));
    }
/*
    function loadingGif() {
        let gifImg = document.getElementById("gifImg");
        gifImg.show();
        setTimeout(() => {
            gifImg.hide();
        }, 4000);
    }

    function hideLoading() {
        document.getElementById("gifImg").style.display = 'none';
    }
*/

    function currentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            r.innerHTML = "<h3>Geolocation not supported</h3>";
        }
    }

    function Search(e){
        if (loc.value == '') {
            errMsg.innerHTML = '<p>Please enter into the search bar</p><button id="searchbtn" disabled>Disabled</button>'
        }
        else {
            errMsg.innerHTML = '<button id="searchbtn">Search</button>'
            searchbtn.addEventListener('click', WeatherCast);
        }
    }

    function showPosition(p) {
        loc.value = p.coords.latitude + "," + p.coords.longitude;
        Search();
        WeatherCast();
    }
    
}); //end