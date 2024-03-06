const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require('jsonwebtoken');
const { v4: uuid } = require("uuid");
const jsonData = require("./index.json")
app.use(cors());
app.use(express.json())

// {
//     clientId: uuid(),
//     clientSecret: uuid(),
//     merchantCode: "MUCH",
//     token: jwt.sign({ "mock": "mock" }, "mock", { expiresIn: "1d" })
// }
app.post("/api/services/auth/v1/token/refresh", async (req, res) => {
    try {
        res.status(200).json(
            {
                status: "success",
                token: jwt.sign({ "mock": "mock" }, "mock", { expiresIn: "5m" }),
                refresh_token: jwt.sign({ "mock": "mock" }, "mock", { expiresIn: "1d" })
            }
        )
    } catch (error) {
        console.log("[Error:refresh token]", error);
    }
})

app.post("/api/services/auth/v1/token", async (req, res) => {
    try {
        res.status(200).json(
            {
                status: "success",
                token: jwt.sign({ "mock": "mock" }, "mock", { expiresIn: "5m" }),
                refresh_token: jwt.sign({ "mock": "mock" }, "mock", { expiresIn: "1d" })
            }
        )
    } catch (error) {
        console.log("[Error:refresh token]", error);
    }
})

app.post("/api/services/fo/v1/guest/:pmsPropertyCode", async (req, res) => {
    try {
        res.status(200).json(
            {
                status: "success"
            }
        )
    } catch (error) {
        console.log("[Error:refresh token]", error);
    }
})

app.get("/api/services/fo/v1/guest/:pmsPropertyCode", async (req, res) => {
    try {
        res.status(200).json(
            {
                status: "success",
                data: {
                    guests: jsonData
                }
            }
        )
    } catch (error) {
        console.log("[Error:refresh token]", error);
    }
})

app.listen(5000, () => {
    console.log("server listening port 5000");
})