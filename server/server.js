const app = require('./app');
const port = 8000;

app.listen(port, () => {
    console.log("Server is listening on http://localhost:"+port);
})