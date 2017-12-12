const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.get("/", (req, res) => {
	res.send("home");
});

const PORT = process.env.PORT || 5000;

//http://localhost:5000/
app.listen(PORT);