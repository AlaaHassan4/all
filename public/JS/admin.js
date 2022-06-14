var deleteButton = document.getElementsByClassName("del");
var model = document.getElementById('model');
var demo = document.getElementById('demo');
var closeButton = document.getElementsByClassName('aa');
var XcloseButton = document.getElementsByClassName('x');
var image = document.getElementsByTagName("img")
var btn_user = document.getElementsByClassName("btn-user")
//  console.log(btn_user);
for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", function() {
        model.style.display='flex';
        demo.style.display='flex';
        demo.style.flexDirection='column';
})
}

function myFunction() {
    var input, filter,ul ,li ,a , i, txtValue;
    input = document.getElementById("myInput")
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    // var text = document.getElementsByTagName("p");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
for (var i = 0; i < closeButton.length; i++) {
    closeButton[i].addEventListener("click", function() {
        this.parentElement.parentElement.style.display = 'none';
        model.style.display='none';
})
}  
for (var i = 0; i < XcloseButton.length; i++) {
    XcloseButton[i].addEventListener("click", function() {
        this.parentElement.style.display = 'none';
        model.style.display='none';
})
}

fetch('http://localhost:8080/getAllUsers/')
.then(res => res.json())
.then(data => console.log(data))
