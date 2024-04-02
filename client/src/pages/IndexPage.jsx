import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Image from "../Image.jsx";

export default function IndexPage() {
  const [rentals,setRentals] = useState([]);
  useEffect(() => {
    axios.get('/rentals').then(response => {
      setRentals(response.data);
    });
  }, []);
  return (
    <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      {rentals.length > 0 && rentals.map(rental => (
        <Link to={'/rental/'+rental._id}>
          <div className="bg-gray-500 mb-2 rounded-2xl flex">
            {rental.photos?.[0] && (
              <Image className="rounded-2xl object-cover aspect-square" src={rental.photos?.[0]} alt=""/>
            )}
          </div>
          <h2 className="font-bold">{rental.address}</h2>
          <h3 className="text-sm text-gray-500">{rental.model}</h3>
          <div className="mt-1">
            <span className="font-bold">${rental.price}</span> per day
          </div>
        </Link>
      ))}
    </div>
  );
}
