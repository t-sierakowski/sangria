window.addEventListener("load", zeroOut, false);

function zeroOut() {
  var y = document.getElementById("sangriayes");
  var n = document.getElementById("sangriano");
  y.style.display = 'none';
  n.style.display = 'none';
}

function sangriaCheck (event) {
  var y = document.getElementById("sangriayes");
  var n = document.getElementById("sangriano");
  if (event.target.id == "yes"){
    y.style.display = 'block';
    n.style.display = 'none';
  }
  else {
    n.style.display = 'block';
    y.style.display = 'none';
  }
}

var yesno = document.getElementById("sangria");
yesno.addEventListener("click", sangriaCheck, false);
var buttons = document.querySelectorAll('button');
