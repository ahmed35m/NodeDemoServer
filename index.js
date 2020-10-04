const http = require("http");
const path = require("path");
const fs = require("fs");
const { reset } = require("nodemon");

const server = http.createServer((req, res) => {
//   console.log(req.url);
  //   if (req.url === "/") {
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //     //res.writeHead(200,{'Content-Type':'text/html'})
  //     //res.end('<h1>home</h1>');
  //   }

  //   if (req.url === "/api/users") {
  //     const users = [
  //       { name: "Ali", age: "12" },
  //       { name: "John", age: "21" },
  //     ];
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }

  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  // Get extension of file
  let extName = path.extname(filePath);
  // Set Content type
  let contentType = "text/html";
  //check ext and set it
  switch (extName) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case "jpg":
      contentType = "image/jpg";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENONET") {
        //page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //server error
        res.writeHead(500);
        res.end(`Server Error ${err.code}`);
      }
    }
    else
    //Sucess
    {
        res.writeHead(200,{'Content-Type':contentType})
        res.end(content),'utf8'

    }
  });

//   console.log(filePath);
//   res.end();
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
