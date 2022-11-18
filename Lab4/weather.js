window.addEventListener('DOMContentLoaded', function(){ 

    let locbtn = this.document.getElementById("loc-btn")
    let loc = document.getElementById("loc");
    let errMsg = document.getElementById("errMsg");

    if (loc.value == '') {
        errMsg.innerHTML = '<p>Please enter into the search bar</p><button id="searchbtn" disabled>Disabled</button>'
    } else {
        errMsg.innerHTML = '<button id="searchbtn">Search</button>'
    }
}); //end