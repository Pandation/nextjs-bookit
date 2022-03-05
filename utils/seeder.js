const Room = require("../models/room");
const rooms = require("../data/rooms");

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://pandation:CcaldiPuLaM3rd3@portfolio.h0g1r.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to DB"))
  .catch((e) => {
    console.log({ error: e });
  });

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log("Rooms are deleted");

    Room.insertMany(rooms);
    console.log("All rooms are added.");
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedRooms();
