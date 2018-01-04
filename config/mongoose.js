var config = require("./config");
var mongoose = require("mongoose");
//mongoose.Promise = global.Promise;

module.exports = function () {
    var db = mongoose.connect(config.db, { useMongoClient: true });

    require("../app/models/user.server.model");

    return db;
};
