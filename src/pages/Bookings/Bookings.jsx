import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const{user}= useContext(AuthContext);
    const [bookings, setBookings]= useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setBookings(data))
    },[])

    const handleDelete =id=>{
      const proceed = confirm('Are you sure you want to delete')
      if(proceed){
              fetch(`http://localhost:5000/bookings/${id}`,{
                  method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                  console.log(data);
                  if(data.deletedCount > 0){
                      alert('deleted successful');
                      const remaining = bookings.filter(booking=>booking._id !==id)
                      setBookings(remaining);
                    }
              })
      }
  }
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
        
      </tr>
    </thead>
    <tbody>
      
      {
        bookings.map(booking=> <BookingRow
        key ={booking._id}
        booking = {booking}
        handleDelete={handleDelete}
        >

        </BookingRow>)
      }
      
      
      
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
            
        </div>
    );
};

export default Bookings;