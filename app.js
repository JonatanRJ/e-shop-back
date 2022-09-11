//Library & variables
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const { keepAlive } = require('./db/query');
port = 3000 || process.env.PORT;


//DB
setInterval(keepAlive, 1000);

//Middleware
app.use( cors() );

//Server
app.use('/api/products/', require('./routes/products'))

//Start
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});