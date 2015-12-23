var mongoDrv = require('mongoose');
var Schema = mongoDrv.Schema;

var __ResSchema = new Schema(
    {
        address: {
                    building: String,
                    coord: [Number],
                    street: String,
                    zipcode: String
                 },
        borough: String,
        cuisine: String,
        grades : [{
                    date: { $date: String },
                    grade: String,
                    score: Number
                 }], 
        restaurant_id: String
    }
);

module.exports = __ResSchema;