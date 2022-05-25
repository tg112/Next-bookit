import rooms from "../models/rooms";
import Room from "../models/rooms"

const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
}

// Create new room => /api/room
const newRoom = async (req, res) => {
  
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
}

// Get room details => /api/rooms/:id
const getSingleRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      res.status(404).json({
        success: false,
        error: "Room not found with this id"
      });
    }
    res.status(200).json({
      success: true,
      room
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
}


// update room details => /api/rooms/:id
const updateRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);
    if (!room) {
      res.status(404).json({
        success: false,
        error: "Room not found with this id"
      });
    }

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      runValidators: true,
      useFindAndModify: false,
      new: true
    });
    res.status(200).json({
      success: true,
      room
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
};

// delete room details => /api/rooms/:id
const deleteRoom = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);
    if (!room) {
      res.status(404).json({
        success: false,
        error: "Room not found with this id"
      });
    }

    await room.remove();
    res.status(200).json({
      success: true,
      message: 'Room is delete'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    })
  }
}

export {
  getAllRooms,
  newRoom,
  getSingleRoom,
  updateRoom,
  deleteRoom
}