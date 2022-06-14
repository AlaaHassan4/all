const { Axios } = require("axios");

// function getPost(apiURL) {
let myRequest = new XMLHttpRequest();
// myRequest.onreadystatechange = function(){
//     if (this.readyState === 4 && this.status === 200 ) {
//         // console.log(this.responseText);
//         console.log(JSON.parse(this.responseText).body);
//     }
// }
// myRequest.open("GET",apiURL,true)
// myRequest.send();
// }

// getPost("https://jsonplaceholder.typicode.com/posts/1")

const getPost = (apiURL) => {
    return new Promise((resolve , reject) =>{
        myRequest.onload = function(){
            if (this.readyState === 4 && this.status === 200 ) {
                // console.log(this.responseText);
                resolve(JSON.parse(this.responseText).body);
            }else{
                reject(Error(this.statusText))
            }
        }
        myRequest.open("GET",apiURL,true)
        myRequest.send();
    })
}
getPost("https://jsonplaceholder.typicode.com/posts/1").then(
    (result) => console.log(result),
    (error) => console.log(error)
);



axios.get('api')
        .then(response => {
            const Airquality = response.Air_Quality;
            const Temp = response.Animal_Temp;
            const HeartRate = response.Heart_Rate;
        })
        .catch(error => console.error(error));