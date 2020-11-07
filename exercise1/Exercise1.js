document.getElementById('submit').onclick = function (){
  console.log ("click");
  if(document.getElementById("password").value == "") {
    alert("please enter the password");
  }
  else if (document.getElementById("password").value.length < 8){
    alert("the passwords are not at least 8 characters long");
  }
  else if (document.getElementById("confirm").value == ""){
    alert("please enter the confirm password");
  }
  else if (document.getElementById("confirm").value != document.getElementById("password").value){
    alert("the passwords entered don't match");
  }
  else{
    alert("Validate");
  }
}
