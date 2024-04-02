import './App.css';
import {Route, Routes} from "react-router-dom"; 
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Layout from "./Layout.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import NewPasswordPage from "./pages/NewPasswordPage.jsx";
import axios from "axios";
import {UserContextProvider} from "./UserContext";
import ProfilePage from "./pages/ProfilePage.jsx";
import RentalsPage from "./pages/RentalsPage.jsx";
import RentalsFormPage from "./pages/RentalsFormPage.jsx";
import RentalPage from "./pages/RentalPage.jsx";
import BookingsPage from "./pages/BookingsPage";
import BookingPage from "./pages/BookingPage";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/password" element={<NewPasswordPage/>}/>
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/rentals" element={<RentalsPage />} />
          <Route path="/account/rentals/new" element={<RentalsFormPage />} />
          <Route path="/account/rentals/:id" element={<RentalsFormPage />} />
          <Route path="/rental/:id" element={<RentalPage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/bookings/:id" element={<BookingPage />} />
       

        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;

