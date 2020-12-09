function myFunction() {
  document.getElementById("press").innerHTML = "Give us all information about you and get sale for English courses!";
}

function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}