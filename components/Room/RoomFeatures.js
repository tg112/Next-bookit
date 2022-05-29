import React from 'react'

const RoomFeatures = ({ room }) => {
  return (
    <>
      <div className='room-feature'>
        <i className="fa fa-cog fa-fw fa-users" aria-hidden="true"></i>
        <p>{room.guestCapacity} Guests</p>
      </div>

      <div className='room-feature'>
        <i className="fa fa-cog fa-fw fa-bed" aria-hidden="true"></i>
        <p>{room.numOfBeds} Beds</p>
      </div>

      <div className='room-feature'>
        <i className={room.breakfast ? 'fa fa-check text-success' : 'fa fa-times text-danger'} aria-hidden="true"></i>
        <p>Breakfast</p>
      </div>
      
      <div className='room-feature'>
        <i className={room.internet ? 'fa fa-check text-success' : 'fa fa-times text-danger'} aria-hidden="true"></i>
        <p>Internet</p>
      </div>

      
      <div className='room-feature'>
        <i className={room.airCondition ? 'fa fa-check text-success' : 'fa fa-times text-danger'} aria-hidden="true"></i>
        <p>Air Condition</p>
      </div>
      
      <div className='room-feature'>
        <i className={room.petAllowed ? 'fa fa-check text-success' : 'fa fa-times text-danger'} aria-hidden="true"></i>
        <p>Pet Allowed</p>
      </div>
      
      <div className='room-feature'>
        <i className={room.roomCleaning ? 'fa fa-check text-success' : 'fa fa-times text-danger'} aria-hidden="true"></i>
        <p>Room Cleaing</p>
      </div>
  
    </>
  )
};

export default RoomFeatures