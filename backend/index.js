const express = require("express");
const app = express();
const userRoutes = require("./routes/UserRoutes");
const database = require("./config/database");

var cors = require("cors");


dotenv.config();
const PORT = 4000;

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

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
})
