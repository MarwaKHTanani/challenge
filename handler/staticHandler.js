const path = require("path");
const fs = require("fs");

const staticHandler = (res, url) => {
  const filepath = url;
  const ext = path.extname(filepath);

  const extentionType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
  };
  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("server error");
    } else {
      res.writeHead(200, { "Content-Type": extentionType[ext] });
      res.end(data);
    }
  });
};
module.exports = staticHandler;
