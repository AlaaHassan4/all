var $password = $("#password");
var $confirmPass = $("#confirm_password");
//var confirmPass = document.getElementById("");
//var password = document.getElementById("password");
var firstname = document.getElementById("validationServer01");
var lastname = document.getElementById("validationServer02");
var username = document.getElementById("validationServer03");
var email = document.getElementById("email");

//Check the length of the Password
function checkLength(){
  return $password.val().length > 8;
}

//Check to see if the value for pass and confirmPass are the same
function samePass(){
  return $password.val()===$confirmPass.val();
}

//If checkLength() is > 8 then we'll hide the hint
function PassLength(){
  if(checkLength()){
    $password.next().hide();
  }else{
    $password.next().show();
  }
}

//If samePass returns true, we'll hide the hint
function PassMatch(){
  if(samePass()){
    $confirmPass.next().hide();
  }else{
    $confirmPass.next().show();
  }
}
function canSubmit(){
  return samePass() && checkLength();
}
function enableSubmitButton(){
  $("#submit").prop("disabled",!canSubmit());
}
//Calls the enableSubmitButton() function to disable the button
enableSubmitButton();

$password.keyup(PassLength).keyup(PassMatch).keyup(enableSubmitButton);
$confirmPass.focus(PassMatch).keyup(PassMatch).keyup(enableSubmitButton);

//*Back-end(get user)* 
var jwt = localStorage.getItem('jwt')
var user_email = localStorage.getItem("curentUserEmail")
// var axios = require('axios');
var data = JSON.stringify({
  "email": "admin2@zoo.com"
});

var config = {
  method: 'get',
  url: 'http://localhost:8080/getUser',
  headers: { 
    'Authorization':jwt,
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
