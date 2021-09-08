setCorrectCount()
var x = document.getElementById("pos"); 
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported in this browser";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude : " + position.coords.latitude + "<br>Longitude : " + position.coords.longitude;
}

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text"); 
    console.log("ev.target",ev.target)
    ev.target.appendChild(document.getElementById(data));
    setCorrectCount();
}
function setCorrectCount () {
    localStorage.setItem("b",document.getElementById("bcount").childElementCount);
    localStorage.setItem("s",document.getElementById("scount").childElementCount);
    localStorage.setItem("i",document.getElementById("icount").childElementCount);
    localStorage.setItem("d",document.getElementById("dcount").childElementCount);

     var b = parseInt(localStorage.getItem("b"));
     var s =  parseInt(localStorage.getItem("s"));
     var i = parseInt(localStorage.getItem("i"));
     var d = parseInt(localStorage.getItem("d"));
     
     var count = b - (s+i+d);
    console.log(count);

    document.getElementById("bd").innerHTML = "BackLog "+ count;
    document.getElementById("sd").innerHTML = "Selected for Dev "+s;
    document.getElementById("id").innerHTML = "In Progress "+i;
    document.getElementById("dd").innerHTML = "Done "+d;
}
if (typeof (Storage) !== "undefined") {
    localStorage.location = localStorage.getItem(getLocation()).toString(); localStorage.setItem("location", localStorage.location); document.getElementById("result").innerHTML = localStorage.getItem("location");
} else {
    document.getElementById("result").innerHTML = "Your browser does not support Web Storage! Try another";
}