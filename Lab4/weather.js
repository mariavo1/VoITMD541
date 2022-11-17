window.addEventListener('DOMContentLoaded', function(){
    let bar = document.getElementById("searchBar");
    let searchBtn = document.getElementById("search-btn");
    let geo = document.getElementById("geo-btn");
    let lat = 0;
    let long = 0;

    function success(p) {
        lat = p.coords.latitude;
        long = p.coords.longitude;
        let api = "https://weatherdbi.herokuapp.com/data/weather/" + lat + "," + long;
        fetchApi(api);
    }

    function currentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Turn on location");
        }
    }

    geo.addEventListener('click', currentLocation);
}); //end