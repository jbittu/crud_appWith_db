require("../server/dB/connection"); //DB connection

const express = require('express');
const app = express();
PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
})