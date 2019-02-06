require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");

const app = express();
const port = process.env.port || 3001;

massive(process.env.CONNECTION_STRING).then(dbinstance => {
	app.set("db", dbinstance);
	console.log("connected");
});

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
