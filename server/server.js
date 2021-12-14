const express = require("express");
const app = express();

app.get("/server", (req, res) => {
    res.json({ message: "Node Connected!" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT);