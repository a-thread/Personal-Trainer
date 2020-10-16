const router = require("express").Router();
const db = require("../models");

router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then(workout=> {
      res.json(workout);
    })
    .catch( (err) => {
      res.status(400).json(err);
    });
});


router.get("/range", (req, res) => {
  db.Workout.find({})
    .then(workout=> {
      res.json(workout);
    })
    .catch( (err) => {
      res.status(400).json(err);
    });
});

// Post Request to Create Workout
router.post("/", async (req, res) => {
  try {
    const workout = req.body;
    workout.day = Date.now();
    const newWorkout = await db.Workout.create(workout);
    res.jason(newWorkout)
  } catch (err) {
    res.status(500).send(err)
  }
});

module.exports = router;
