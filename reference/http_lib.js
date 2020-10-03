const http = require("http");

//Create server obj

http
  .createServer((req, res) => {
    //Write Response
    res.write("Hello Worlds");
    res.end;
  })
  .listen(8000, () => {
    console.log("Server running...");
  });
