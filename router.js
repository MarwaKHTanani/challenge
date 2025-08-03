const path = require("path");
const staticHandler = require("./handler/staticHandler");
const apiHandler = require("./handler/apiHandler");

const router = (req, res) => {
  const url = req.url;

  console.log("URL: ", url);

  if (url === "/" || url === "/fac") {
    staticHandler(res, path.join(__dirname, "fac.html"));
  } else if (url === "/dwyl") {
    staticHandler(res, path.join(__dirname, "dwyl.html"));
  } else if (url === "/css/stylesheet.css") {
    staticHandler(res, path.join(__dirname, "stylesheet.css"));
  } else if (url === "/js/request.js") {
    staticHandler(res, path.join(__dirname, "request.js"));
  } else if (url === "/js/index.js") {
    staticHandler(res, path.join(__dirname, "index.js"));
  } else if (url === "/api/repos/fac" || url === "/api/repos/dwyl") {
    apiHandler(res, url);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("404 server error");
  }
};
module.exports = router;
