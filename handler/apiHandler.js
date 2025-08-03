const repos = require("../repos.json");
const apiHandler = (res, url) => {
  const name = url.replace("/api/repos/", "");

  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(repos[name]));
};
module.exports = apiHandler;
