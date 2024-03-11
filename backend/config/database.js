const mongoose = require("mongoose");


exports.connect = () => {
    mongoose.connect("mongodb+srv://bhuwanpradhan36:t0nbP20dg3AcJYRN@cluster0.13wz2ke.mongodb.net/tmcjsr", {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};