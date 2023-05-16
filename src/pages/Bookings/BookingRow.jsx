import React from 'react';

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    console.log(booking);
    const {_id, customerName, email, date, price, img, service , status} = booking;
    
    
    
    return (
        <div>

            <tr>
                <th>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>

                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {img && <img src={img} />}
                        </div>

                        <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    <td>{service}</td>
                    <td>{date}</td>
                    <td>${price}</td>

                </td>
                <td>Purple</td>
                <th>{
                      status ==='confirm'? <span className='font-bold text-primary'>Confirmed</span>:
                      <button onClick={()=>handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                    
                    }
                    
                </th>
            </tr>

        </div>
    );
};

export default BookingRow;