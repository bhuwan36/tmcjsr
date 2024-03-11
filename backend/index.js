const express = require("express");
const app = express();
const userRoutes = require("./routes/UserRoutes");
const database = require("./config/database");

var cors = require("cors");



app.use(
  cors({
    origin: "*",
  })
);

//database connect
database.connect();
app.use(express.json());

app.use("/api/auth", userRoutes);



app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: 'Our server is up and running...'
  });
});

app.listen(8080, () => {
  console.log(`App is running at ${8080}`);
})
