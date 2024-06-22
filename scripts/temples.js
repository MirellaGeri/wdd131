document.getElementById("year").innerHTML = (new Date().getFullYear());
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }