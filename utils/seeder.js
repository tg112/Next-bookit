const Room = require("../models/rooms");
const rooms = require("../data/rooms.json");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://ghulamabbas_bookit:bookit258@bookit.ghtfw.mongodb.net/bookit?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const seedRooms = async () => {
  try {
    await Room.deleteMany();
    console.log('Rooms are deleted');
    await Room.insertMany(rooms);
    console.log("All rooms are added");
    process.exit();
  } catch (e) {
    console.log(e.message);
    process.exit();
  }
}

seedRooms();