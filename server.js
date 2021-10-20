const express = require('express');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 6000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(express.json())
// Configuring the database
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database.', err);
    process.exit();
});
// define a root/default route
app.get('/', (req, res) => {
    res.json({ "message": "Hello World" });
});


// Require Users routes
const userRoutes = require('./src/routes/user.routes')
// using as middleware
app.use('/api/users', userRoutes)

// listen for requests
app.listen(port, () => {
    console.log(`Node server is listening on port ${port}`);
});