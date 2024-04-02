import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import RentalGallery from "../RentalGallery";
import AddressLink from "../AddressLink";

export default function RentalPage() {
  const {id} = useParams();
  const [rental,setRental] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/rentals/${id}`).then(response => {
      setRental(response.data);
    });
  }, [id]);

  if (!rental) return '';



  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      <h1 className="text-3xl">{rental.model} {rental.year}</h1>
      <AddressLink>{rental.address}</AddressLink>
      <RentalGallery rental={rental} />
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            {rental.description}
          </div>
          Mileage: {rental.mileage}<br />
          Fuel: {rental.fuel}<br />
          Price per day: {rental.price}
        </div>
        <div>
          <BookingWidget rental={rental} />
        </div>
      </div>
    </div>
  );
}