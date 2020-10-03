const fs = require("fs");
const path = require("path");

//Create file
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Folder created");
// });

// Create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  {},
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Folder written to 1...");
  }
);

// Append file
fs.appendFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello earth!",
  {},
  (err) => {
    if (err) {
      throw err;
    }
    console.log("Folder written to 2...");
  }
);

//Read File
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

// Rename File
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) {
      throw err;
    }

    console.log("File Renamed");
  }
);
