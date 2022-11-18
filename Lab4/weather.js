window.addEventListener('DOMContentLoaded', function(){
    let bar = document.getElementById("searchBar").value;
    let searchBtn = document.getElementById("search-btn");
    let geo = document.getElementById("geo-btn");
    let wContent = document.getElementById("weatherContent");
    let lat;
    let long;

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            alert ("Geolocation not supported");
        }
    }
/*
    function success(p) {
        lat = p.coords.latitude;
        long = p.coords.longitude;
        let api = "https://weatherdbi.herokuapp.com/data/weather/" + lat + "," + long;
        fetchApi(api);
    }

    function fetchApi(api) {
        fetch(api)
        .then(function(res){
            return res.json();
        })
        .then(function(response){
            if (response.status === 'fail' && response.message == 'invalid query') {
                alert("Not Found");
            } else {
                wforecast(response);
            }
        })
        .catch();
    }

    function Search() {
        if (bar === '') {
            alert("City not found");
        } else {
            fetch("https://weatherdbi.herokuapp.com/data/weather/" + bar)
            .then(function(res) {
                if (!res.ok) {
                    return res.json();
                } else {
                    alert("Reponse error");
                }
            })
        }
        .then(json => {
            if(json.status){
                wContent.innerHTML = "";

            } else {
                wforecast(json);
        
            }
        })
        
    }

    function currentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Turn on location");
        }
    }

    geo.addEventListener('click', currentLocation);
*/
}); //end