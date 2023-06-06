var load;
function myloader() {
  load = setTimeout(showContent, 3000);
}
function showContent() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("animate").style.display = "block";
}
