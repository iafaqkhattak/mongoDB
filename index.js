const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Sample")
  .then(() => {
    console.log("Connected to Database Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const student = new mongoose.Schema({
  name: String,
  workout: Boolean,
  age: Number,
});

const Student = new mongoose.model("Student", student);

const adder = async (user) => {
  const ss = new Student({
    name: "Khattaka",
    workout: false,
    age: 5,
  });

  await ss.save();
};

adder();
