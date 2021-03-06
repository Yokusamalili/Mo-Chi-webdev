/**
 * Created by moira on 6/2/17.
 */

// create a node vendor module
module.exports = function (app) {
    var model = require("./models/models.server")();
    require("./services/user.service.server.js")(app, model);
    require("./services/website.service.server.js")(app, model);
    require("./services/page.service.server.js")(app, model);
    require("./services/widget.service.server")(app, model);

};