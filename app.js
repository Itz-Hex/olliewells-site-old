// import npm packages
const express = require("express");
const morgan = require("morgan");
require('dotenv').config()

// import routes
const indexRoutes = require("./routes/index.route");
const contactRoutes = require("./routes/contact.route");
const servicesRoutes = require("./routes/services.route");

const app = express();

app.listen(process.env.PORT || 3000, function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(indexRoutes);
app.use(contactRoutes);
app.use(servicesRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).send("404 Not found");
})
