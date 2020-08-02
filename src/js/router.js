const routes = {
  "/": "main",
  "/login": "login",
  "/detail": "detail",
};

function Router() {
  const methods = {
    main: function () {
      go(require(`html-loader!../views/pages/main.html`));
    },
    login: function () {
      go(require(`html-loader!../views/pages/login.html`));
    },
  };
  function init() {
    const funcName = routes[location.pathname];
    methods[funcName]();
  }

  function go(html) {
    const $wrapContent = document.querySelector("#wrapContent");
    $wrapContent.innerHTML = html;
  }
  return {
    init,
    go,
  };
}
export default Router;
