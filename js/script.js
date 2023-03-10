function getSeason() {
    let temp = document.getElementById("temp").value;

//send a request which look like this
//http://localhost:49765/api/SeasonAPI/GetSeason/25

let URL = "http://localhost:49765/api/SeasonAPI/GetSeason/" + temp;
let rq = new XMLHttpRequest();

rq.onreadystatechange = function() {
    if (rq.readyState == 4 && rq.status == 200) {
        //the request is successful and the request is finished
        document.getElementById('season').style.display="block";
        let Season = JSON.parse(rq.responseText);
        console.log(Season.SeasonName);

        //client side rendering
        document.getElementById('seasonNameSpan').innerHTML = Season.SeasonName;
        document.getElementById('photoLink').href = Season.ImageURL;
        document.getElementById('temperatureSpan').innerHTML = Season.Temp;
        document.getElementById('image').src = "images/" + Season.SeasonName.toLowerCase() +".jpg";
        document.getElementById('image').alt = Season.SeasonName;
    }
}

rq.open("GET", URL);
rq.send();

}