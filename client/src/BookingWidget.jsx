import {useContext, useEffect, useState} from "react";
import {differenceInCalendarDays} from "date-fns";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {UserContext} from "./UserContext.jsx";

export default function BookingWidget({rental}) {
  const [pickupDate,setPickupDate] = useState('');
  const [returnDate,setReturnDate] = useState('');
  const [numberOfGuests,setNumberOfGuests] = useState(1);
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [redirect,setRedirect] = useState('');
  const {user} = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfDays = 0;
  if (pickupDate && returnDate) {
    numberOfDays = differenceInCalendarDays(new Date(returnDate), new Date(pickupDate));
  }

  async function bookThisRental() {
    const response = await axios.post('/bookings', {
      pickupDate,returnDate,numberOfGuests,name,phone,
      rental:rental._id,
      price:numberOfDays * rental.price,
    });
    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        Price: ${rental.price} / per day
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Pickup Date:</label>
            <input type="date"
                   value={pickupDate}
                   onChange={ev => setPickupDate(ev.target.value)}/>
          </div>
          <div className="py-3 px-4 border-l">
            <label>Return Date:</label>
            <input type="date" value={returnDate}
                   onChange={ev => setReturnDate(ev.target.value)}/>
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of guests:</label>
          <input type="number"
                 value={numberOfGuests}
                 onChange={ev => setNumberOfGuests(ev.target.value)}/>
        </div>
        {numberOfDays > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input type="text"
                   value={name}
                   onChange={ev => setName(ev.target.value)}/>
            <label>Phone number:</label>
            <input type="tel"
                   value={phone}
                   onChange={ev => setPhone(ev.target.value)}/>
          </div>
        )}
      </div>
      <button onClick={bookThisRental} className="primary mt-4">
        Book this rental
        {numberOfDays > 0 && (
          <span> ${numberOfDays * rental.price}</span>
        )}
      </button>
    </div>
  );
}