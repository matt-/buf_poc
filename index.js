const path = require("path");

const express = require("express");

const PORT = 4000;

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}));


app.post("/oauth2/device/registration", (req, res) => {
    res.send({
        "client_id": "asdf",
        "client_secret": "asfd",
        "client_id_issued_at": Date.now(),
    })
});

app.post("/oauth2/device/authorization", (req, res) => {
    res.send({
        "device_code": "asdf",
        "user_code": "asfd",
        "expires_in": 900,
        "interval": 5,
        "verification_uri": "file:///System/Applications/Calculator.app",
        "verification_uri_complete": "file:///System/Applications/Calculator.app"
    })
});


// Start Server
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});