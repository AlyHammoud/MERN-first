require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");

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
app.use("/api/workouts", workoutRoutes);

// connect to db:
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db and App is listening at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));

// app.listen(process.env.PORT, () => {
//   console.log(`App is listening at port: ${process.env.PORT}`);
// });
