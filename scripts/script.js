/* Student Name: Maegan Marlow 
File Name: script.js
Date: 05/23/2023
*/

// Global variables

var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

// Function to Display the Burpees Example Video 

function burpees() {
    videoSource.src = "media/burpees.mp4";
    descriptionSource.src = "media/burpees-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

// Function to Display the Plank Example Video 

function plank() {
    videoSource.src = "media/plank.mp4";
    descriptionSource.src = "media/plank-descriptions.vtt";
    video.style.display = "block";
    video.load();
}

// Function to Display the Mountain Climbers Example Video 

function mountain() {
    videoSource.src = "media/mc.mp4";
    descriptionSource.src = "media/mountain-descriptions.vtt";
    video.style.display = "block";
    video.load();
}


// Hamburger Menu Function 

function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");

    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        menu.style.display = "block";
    } else {
        menu.style.display = "block",
        menu.style.display = "none";
    }
}

// Function to Display a Promo Code

function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Promo Code: D25START";
    promo.style.color = "#ff0000";
    promo.style.fontSize ="2em";
}