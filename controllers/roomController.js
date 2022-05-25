import catchAsyncError from "../middlewares/catchAsyncError";
import Room from "../models/rooms"
import ErrorHandler from "../utils/errorHandler";


const getAllRooms = catchAsyncError(async (req, res) => {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms
    })
})

// Create new room => /api/room
const newRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({
    success: true,
    room
  })
});

// Get room details => /api/rooms/:id
const getSingleRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this id", 404));
  }
  res.status(200).json({
    success: true,
    room
  });
});


// update room details => /api/rooms/:id
const updateRoom = catchAsyncError(async (req, res, next) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this id", 404));
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
});

// delete room details => /api/rooms/:id
const deleteRoom = catchAsyncError(async (req, res, next) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found with this id", 404));
  }

  await room.remove();
  res.status(200).json({
    success: true,
    message: 'Room is delete'
  });
});

export {
  getAllRooms,
  newRoom,
  getSingleRoom,
  updateRoom,
  deleteRoom
}