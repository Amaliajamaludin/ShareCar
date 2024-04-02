import {Link, useParams} from "react-router-dom";
import AccountNav from "../AccountNav";
import {useEffect, useState} from "react";
import axios from "axios";
import RentalImg from "../RentalImg";
export default function RentalsPage() {
    const [rentals,setRentals] = useState([]);
    useEffect(() => {
        axios.get('/user-rentals').then(({data}) => {
        setRentals(data);
        });
    }, []);
    return (
    <div>
      <AccountNav />
        <div className="text-center">
          <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full" to={'/account/rentals/new'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
            </svg>
            Add new rental
          </Link>
        </div>
        <div className="mt-4">
          {rentals.length > 0 && rentals.map(rental => (
            <Link to={'/account/rentals/'+rental._id} className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl">
              <div className="flex w-32 h-32 bg-gray-300 grow shrink-0">
                <RentalImg rental={rental} />
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl">{rental.model}</h2>
                <p className="text-sm mt-2">{rental.description}</p>
              </div>
            </Link>
          ))}
        </div>
    </div>
  );
}