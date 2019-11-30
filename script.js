function showSmartLockInf(){
var x = document.getElementById("SMARTLOCKINF");
var y = document.getElementById("IMAGINEINF");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block"
  } else {
    x.style.display = "none";
  }
}
function showImagineInf(){
   var x = document.getElementById("IMAGINEINF");
   var y = document.getElemnetById("SMARTLOCKINF");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
  } else {
    x.style.display = "none";
  } 
}