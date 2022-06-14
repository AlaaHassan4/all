// const io2 = require("socket.io-client");
// // Create SocketIO instance, connect
// var socket2 = io2("http://127.0.0.1:1880", {
//   secure: true,
//   rejectUnauthorized: false,
// });
// function lmao() {
//   console.log("ssds");

//   socket2.on("connection", function () {
//     try {
//       console.log("socket cconnect");
//       socket2.emit("add user", { lamo: "asdfsdfa" });
//     } catch (e) {
//       console.log(e);
//     }
//   });
//   socket2.on("stream", function (data) {
//     try {
//       console.log("socket connect", data);
//       socket2.emit("add user", data);
//     } catch (e) {
//       console.log(e);
//     }
//   });
//   socket2.emit("add user", "45678");
// }
// lmao();
