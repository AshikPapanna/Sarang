const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var db = mongoose.connect("mongodb://localhost/myapp")
//var BaseSchema=require('./base_m.js')

var baseSchema = new mongoose.Schema(
    {
        name: {type: String},
        Id: String

    });
baseSchema.virtual('test').set(function (v) {
    console.log(v);
    this.Id = v;
});

//module.exports = mongoose.model('Base', baseSchema);
var b = mongoose.model('Base', baseSchema);
var base = new b({ name: "Ashik", test: '5d5d16f6268f77de10f8bd02' });
base.save((err, d) => {
    if (err) { console.log(err) }
    else {
        console.log(d);
    }
});