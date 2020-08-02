import "../assets/css/app.scss";

import main from "./main";
import Router from "./router";

function init() {
  main();
}

(function () {
  const router = Router();
  router.init();

  init();

  console.log("location", location);
})();
