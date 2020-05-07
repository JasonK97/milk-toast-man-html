var express = require("express");
var app = express();
require('dotenv').config();

app.use(express.static("public"));
app.use(express.json()); //support json encoded bodies
app.use(express.urlencoded({extended: true})); //support url encoded bodies
//app.use(campainController.logRequest);

app.set("port", (process.env.PORT || 5000));

app.get("/home");

app.listen(app.get("port"), function() {
    console.log("Now listening on port: ", app.get("port"));
});