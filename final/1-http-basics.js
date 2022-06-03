const http = require("http");

const server = http.createServer((req, res) => {
  //console.log(req.url);
  const url = req.url;
  // home page
  if (url === "/") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.write("home page");
    res.end();
  }
  // about page
  else if (url === "/about") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.write("<h1>About page</h1>");
    res.end();
  }

  // 404
  else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(3000);
