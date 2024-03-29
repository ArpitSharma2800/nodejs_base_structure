const {
    controllerFunc,
    serverCheck
} = require("./controller");
const router = require("express").Router();

router.get("/check", serverCheck);

router.post("/addUser", controllerFunc);

module.exports = router;