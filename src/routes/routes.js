//register all the resources here
module.exports = function (app) {
  require("./user.routes")(app);
  require("./component.routes")(app);
  require("./project.routes")(app);
  require("./theme.routes")(app);
  require("./asset.routes")(app);
  require("./prelogin.routes")(app);
  require("./trigger.routes")(app);
  require("./service.routes")(app);
  require("./counter.routes")(app);
  require("./headers.collection.routes")(app);
  require("./preview.routes")(app);
  require("./authorization.configuration.routes")(app);
  require("./fund.accounts.routes")(app);
  require("./fund.login.routes")(app);
};
