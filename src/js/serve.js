function serve() {
  const wrapContent = document.querySelector("#wrapContent");
  wrapContent.innerHTML = require("html-loader!../views/pages/serve.html");
}

export default serve;
