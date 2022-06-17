require("dotenv").config();

const express = require("express");
const workoutRoutes = require('./routes/workout');

//express app
const app = express();

//middleware
app.use(express.json()); // to get access to req.body

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// test route inside server:
// app.get('/', (req, res) => {
//     res.json('Welcome')
// })


//attach all the routes from fodler routes/workout.js
//prefixed as /api/workouts/theRouteName
app.use("/api/workouts",workoutRoutes);

app.listen(process.env.PORT, () => {
  console.log(`App is listening at port: ${process.env.PORT}`);
});
