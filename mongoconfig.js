const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>@cluster0-zwqus.mongodb.net/tilt').then(()=>{
    console.log("Connected sucessfully...");

}).catch((err)=>{
    console.log(err);
});

module.exports.mongoose = mongoose;