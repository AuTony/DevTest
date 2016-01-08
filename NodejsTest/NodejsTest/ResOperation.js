var DBConnectionStr = "mongodb://52.62.60.102:27017";
var mongoDrv = require('mongoose');  // get the mongoose driver connection with the MongoDB
var _ResSchema = require('./DataModel.js');
//var Schema = mongoDrv.Schema;

//var ResSchema = new mongoDrv.Schema(_ResSchema);

mongoDrv.connect(DBConnectionStr);   // connect to mongoDB
var db = mongoDrv.Connection; // get the connection
//db.on('error', console.error.bind(console, 'Connection error:'));
//db.on('open', function () { console.log("DB connected on: %s", DBConnectionStr) });

if (db == 'undefined') {
    console.log("Cannot connect to database: %s", DBConnectionStr);
    process.exit(1);
}

var ResModel = mongoDrv.model('restaurants', _ResSchema);

exports.get = function (req, resp) {
   console.log("Get the data for:  %s", req.params.RestID);
   ResModel.find({"restaurant_id":req.params.RestID}, function (error, res) {
        if (error) {
            resp.send(500, { error: error });
        } else if (res.length == 0) {
            resp.status(2001).send({ "error" : true, "message" : "no record!" });  //prefer to using resp.status(code).send(body)
        }
        else {
            resp.send(res);
        }
    });
};