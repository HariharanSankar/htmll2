var x = document.getElementById("pos"); 

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported in this browser";
//     }
// }
// function showPosition(position) {
//     x.innerHTML = "Latitude : " + position.coords.latitude + "<br>Longitude : " + position.coords.longitude;
// }

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text"); ev.target.appendChild(document.getElementById(data));
}

if (typeof (Storage) !== "undefined") {
    localStorage.location = localStorage.getItem(getLocation()).toString(); localStorage.setItem("location", localStorage.location); document.getElementById("result").innerHTML = localStorage.getItem("location");
} else {
    document.getElementById("result").innerHTML = "Your browser does not support Web Storage! Try another";
}