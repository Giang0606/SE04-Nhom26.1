require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
});

mongoose.connection.on('error', (err) => {
    console.log("Mongoose connection error: "+ err.message);
});

mongoose.connection.once('open', () => {
    console.log("MongoDB connected!");
});

require('./models/User');
require('./models/Chatroom');
require('./models/Message');

const app = require('./app');
const port = 8000;

app.listen(port, () => {
    console.log("Server is listening on http://localhost:"+port);
});