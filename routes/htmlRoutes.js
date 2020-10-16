const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("/workouts", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/excercise.html"))
});

router.get("/range", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
});

module.exports = router;