window.addEventListener('DOMContentLoaded', function(){
    let bar = document.getElementById("searchBar");
    let searchBtn = document.getElementById("search-btn");
    let geo = document.getElementById("geo-btn");

    function currentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Turn on location");
        }
    }

    geo.addEventListener('click', currentLocation);
}); //end