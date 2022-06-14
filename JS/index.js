var password = document.getElementById("floatingPassword");
var Email = document.getElementById("floatingInput");
var loginButton = document.getElementById("login");
var allButtons = document.querySelectorAll(".buttons button");
var MySection = document.querySelector("section");
var allDiv = document.querySelectorAll(".form section")
var emailerror = document.getElementById("emailerror");
var passerror = document.getElementById("passerror");
var loginerror = document.getElementById("loginerror");

// var email = document.getElementById("floatingInput").value;
// var pass = document.getElementById("floatingPassword").value;


Email.focus();

//show and hide login and about
function dispaly(x) {
  index = x.getAttribute("index");

  allDiv[index].classList.remove("hide");
  allDiv[index].classList.add("show");

  currentSib = Array.from(allDiv).slice();
  currentSib.splice(index, 1);

  for (var i = 0; i < currentSib.length; i++) {
    currentSib[i].classList.add("hide");
    currentSib[i].classList.remove("show");
  }
}
//show password
function myFunction() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}


// login button
loginButton.addEventListener("click", function () {
  //user Email feild
   if (Email.value == "") {
    emailerror.innerHTML = "!Enter your user Email"
    Email.focus();
  }
   else if (!Email.value == "") {
    emailerror.innerHTML = "OK "
    emailerror.style.color = "green"
  }

  //password field
   if (password.value == "") {
    passerror.innerHTML = "!Enter your password"
    password.focus();
  }
  else if (!password.value == "") {
    passerror.innerHTML = "OK "
    passerror.style.color = "green"
  }
 
  if(!Email.value == "" && !password.value == "") {
  
  //*BACK_END*
  const em = Email.value;
  const pass = password.value;

  // var axios = require('axios');
  var data = JSON.stringify({
    "strategy": "local",
    "password": pass,
    "email": em
  });
  
  var config = {
    method: 'post',
    url: 'http://localhost:8080/login',
    headers: { 
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE2NTUwNjkxMzYsImV4cCI6MTY1NTE1NTUzNiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYWRtaW4yQHpvby5jb20iLCJqdGkiOiI3M2M3ZGFiMy00M2ZlLTQ0NWItYmVkYy1iNGIxNzAxYTZhMWUifQ.hZUkllns-UCaDRHTUTIU6xeFQ8K4XbBii7FIpn1YOts',
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(response);
    const role = response.data.user.role;
      if (role === "admin") {
      window.open('admin.html');
      var jwt = response.data.accessToken;
      localStorage.setItem("jwt", jwt);
      // console.log(jwt);
      var useremail = response.data.user.email
      // console.log(useremail);

      localStorage.setItem("curentUserEmail",useremail);
      console.log(localStorage.getItem("curentUserEmail"));
    }
    else if(role === "user") {
      window.open('User.html');
      // localStorage.setItem("c", em);
      console.log(localStorage.getItem("curentUserEmail"));
    }
    // var useremail = em
   


  })
  .catch(function (error) {
    console.log(error);
    loginerror.innerHTML = "invalid email or password"
    loginButton.style.color ="red"
  });
  

 }

}) 