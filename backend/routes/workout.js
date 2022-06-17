const express = require("express");

const router = express.Router();

//get all workouts
router.get('/', (req, res) => {
    res.json({msg: "get all workouts"})
});

//get a single workout
router.get('/:id', (req, res) => {
    res.json({msg: "get single workout"});
});

//post new workout
router.post('/', (req, res) => {
    res.json({msg: "Post a new workout"})
});

//delete new workout
router.delete('/:id', (req, res) => {
    res.json({msg: "delte a workout"})
});

//update new workout
router.patch('/:id', (req, res) => {
    res.json({msg: "update a workout"})
});

module.exports = router;