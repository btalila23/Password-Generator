//generate random password
function generate(){

  //set password length/difficulty
  let difficulty = document.getElementById("slider").value;

  //possible password values
  let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  let password = "";

  //create for loop to choose password characters
  for(var i = 0; i <= difficulty; i++){
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }