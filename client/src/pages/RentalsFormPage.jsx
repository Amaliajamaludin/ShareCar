import PhotosUploader from "../PhotosUploader.jsx";
import Perks from "../Perks.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import AccountNav from "../AccountNav.jsx";
import {Navigate, useParams} from "react-router-dom";

export default function RentalsPage(){
    const {id} = useParams();
    const [model,setModel] = useState('');
    const [year,setYear] = useState('');
    const [mileage,setMileage] = useState('');
    const [fuel,setFuel] = useState('');
    const [address,setAddress] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [availibilityStart,setAvailibilityStart] = useState('');
    const [availibilityEnd,setAvailibilityEnd] = useState('');
    const [capacity,setCapacity] = useState(1);
    const [price,setPrice] = useState(0);
    const [redirect,setRedirect] = useState(false);
    useEffect(() => {
    if (!id) {
      return;
    }
    axios.get('/rentals/'+id).then(response => {
       const {data} = response;
       setModel(data.model);
       setYear(data.year);
       setMileage(data.mileage);
       setFuel(data.fuel);
       setAddress(data.address);
       setAddedPhotos(data.photos);
       setDescription(data.description);
       setPerks(data.perks);
       setAvailibilityStart(data.availibilityStart);
       setAvailibilityEnd(data.availibilityEnd);
       setCapacity(data.capacity);
       setPrice(data.price);
    });
    }, [id]);
    function inputHeader(text){
       return(
         <h2 className="text-2xl mt-4">{text}</h2>
       );
    }
    function preInput(header) {
        return(
            <>
            {inputHeader(header)}
            </>
        );
    }
    
    async function saveRental(ev) {
        ev.preventDefault();
        const rentalData = {
        model, year,mileage, fuel, address, addedPhotos,
        description, perks, availibilityStart, 
        availibilityEnd, capacity, price,
        };
        if (id) {
            // update
            await axios.put('/rentals', {
                id, ...rentalData
            });
            setRedirect(true);
            } else {
            // new rental
            await axios.post('/rentals', rentalData);
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/account/rentals'} />
    }

return(
    <div>
        <AccountNav />
        <form onSubmit={saveRental}>
            {preInput('Model')}
            <input type="text" value={model} onChange={ev => setModel(ev.target.value)} placeholder="model, for example Honda Civic " />
            {preInput('Year')}
            <input type="text" value={year} onChange={ev => setYear(ev.target.value)} placeholder="year" />
            {preInput('Mileage')}
            <input type="text" value={mileage} onChange={ev => setMileage(ev.target.value)} placeholder="mileage" />
            {preInput('Fuel')}
            <input type="text" value={fuel} onChange={ev => setFuel(ev.target.value)} placeholder="fuel" />
            {preInput('Pickup/Return Location')}
            <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="Address, for example 4900 Palm Drive, Columbus, 44812, Michigan" />
            {preInput('Photos')}
            <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
            {preInput('Description')}
            <textarea value={description} onChange={ev => setDescription(ev.target.value)} placeholder="describe the rental" />
            {preInput('Perks')}
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-col-3 lg:grid-cols-6" >
                <Perks selected={perks} onChange={setPerks}/>  
            </div>
            {preInput('Start')}
            <input type="date"value={availibilityStart} onChange={ev => setAvailibilityStart(ev.target.value)} placeholder="Availibility to rent the vehicle Starts at" />
            {preInput('End')}
            <input type="date" value={availibilityEnd} onChange={ev => setAvailibilityEnd(ev.target.value)}placeholder="Availibility to rent the vehicle Ends at" />
            {preInput('Capacity')}
            <input type="number" value={capacity} onChange={ev => setCapacity(ev.target.value)} placeholder="capacity" />
            {preInput('Price')}
            <input type="number" value={price} onChange={ev => setPrice(ev.target.value)} placeholder="price per day" />
            <button className="primary my-4">Save</button>
        </form>
    </div>
    );
}