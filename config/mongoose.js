var config = require("./config");
var mongoose = require("mongoose");
//mongoose.Promise = global.Promise;

module.exports = function () {
    var db = mongoose.connect(config.db, { useMongoClient: true });
    mongoose.Promise = global.Promise;

    require("../app/models/user.server.model");
    require("../app/models/article.server.model");

    return db;
};
