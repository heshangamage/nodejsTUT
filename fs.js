var fs = require("fs");

// //make directory
// fs.mkdirSync("createdDirectory");
// // remove directory
// fs.rmdirSync("createdDirectory");
// //asynchronous create directory and remove directory
// fs.mkdir("createdDirectory", function() {
//   fs.readFile("readFile.txt", "utf8", function(err, data) {
//     fs.writeFile("./createdDirectory/writeFile.txt", data);
//   });
// });

//asnchronous remove file then remove directory
fs.unlink("./createdDirectory/writeFile.txt", function() {
  fs.rmdir("createdDirectory");
});
