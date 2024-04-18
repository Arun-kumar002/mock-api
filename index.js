const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require('jsonwebtoken');
const { v4: uuid } = require("uuid");
const jsonData = require("./index.json")
app.use(cors());
app.use(express.json())


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

app.put("/api/services/fo/v1/guest/:pmsPropertyCode", async (req, res) => {
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

app.get("/api/services/email-template/v2", async (req, res) => {
    try {
        res.status(200).json(
            {
                "status": "success",
                "result": {
                    "tableData": [
                        {
                            "_id": "659ce9ac554265839d5a8529",
                            "catName": "Prerequsites-Front Office",
                            "emailFrom": "shubham.naik@ecobillz.com",
                            "emailSettingId": "659ce83a554265839d5a8450",
                            "subject": "Kiosk OTP",
                            "body": "Your OTP for authentication is: [OTP]\nThis code will expire in [TIME_PERIOD] minutes. Please use it promptly.\n",
                            "sendAsHtml": true,
                            "noAttachment": false,
                            "headerId": "659ce8527b51cb1f384dab54",
                            "footerId": "659ce86d7b51cb1f384dab74",
                            "type": "welcome",
                            "name": "OTP",
                            "enable": true,
                            "index": null
                        },
                        {
                            "_id": "659ce8e97b51cb1f384dab9f",
                            "catName": "Prerequsites-Front Office",
                            "emailFrom": "shubham.naik@ecobillz.com",
                            "emailSettingId": "659ce83a554265839d5a8450",
                            "subject": "Ecobillz activate license notification",
                            "body": "Welcome to ecobillz, Activate License <a href=\"[FORM_LINK]\">Click Here</a>",
                            "sendAsHtml": true,
                            "noAttachment": false,
                            "headerId": "659ce8527b51cb1f384dab54",
                            "footerId": "659ce86d7b51cb1f384dab74",
                            "type": "welcome",
                            "name": "License Activation",
                            "enable": true,
                            "index": null
                        }
                    ]
                }
            }
        )
    } catch (error) {
        console.log("[Error:refresh token]", error);
    }
})

app.get("/api/services/generic-form/v2", async (req, res) => {
    try {
        res.status(200).json(
            {
                "status": "success",
                "result": [
                    {
                        "_id": "65c1e143cd4684226e5114d2",
                        "name": "Prerequsites-Front Office"
                    },
                    {
                        "_id": "65c220dc2ef6004f142ca258",
                        "name": "Prerequsites-Front Office"
                    },
                    {
                        "_id": "65cb160b73ee3af77e002855",
                        "name": "Prerequsites-Front Office"
                    },
                    {
                        "_id": "65cc3535a772b56664652623",
                        "name": "Prerequsites-Front Office"
                    }
                ]
            }
        )
    } catch (error) {
        console.log("[Error:refresh token]", error);
    }
})


app.listen(5000, () => {
    console.log("server listening port 5000");
})