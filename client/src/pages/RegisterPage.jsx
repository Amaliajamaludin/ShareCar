import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [securityQuestion1,setSecurityQuestion1] = useState('');
    const [answer1,setAnswer1] = useState('');
    const [securityQuestion2,setSecurityQuestion2] = useState('');
    const [answer2,setAnswer2] = useState('');
    const [securityQuestion3,setSecurityQuestion3] = useState('');
    const [answer3,setAnswer3] = useState('');

    async function registerUser(ev){
        ev.preventDefault();
        try {
            await axios.post('/register',{
            name, 
            email, 
            password, 
            securityQuestion1, 
            answer1, 
            securityQuestion2, 
            answer2, 
            securityQuestion3, 
            answer3
        });
        alert('Registration successful. Now you can log in');
        } catch (e) {
            alert('Registration failed. Please try again later');
        }
    }
    return(
        <div className="mt-4 grow flex items-center justify-around">
    <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
            <input type="text" placeholder="John Doe" name="name" id="name"
            value={name} 
            onChange={ev=> setName(ev.target.value)} />
            <input type="email" placeholder='your@email.com' name='email' id="email"
            value={email} 
            onChange={ev=> setEmail(ev.target.value)} />
            <input type="password" placeholder="password" name="password" id="password"
            value={password} 
            onChange={ev=> setPassword(ev.target.value)} />

            {/* First Security Question */}
            <select name="securityQuestion1" id="securityQuestion1" 
            value={securityQuestion1} 
            onChange={ev=> setSecurityQuestion1(ev.target.value)}>
                <option value="">Select a security question</option>
                <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                <option value="What is the name of your first pet?">What is the name of your first pet?</option>
                <option value="What is the city of your birth?">What is the city of your birth?</option>
            </select>
            <input type="text" placeholder="Answer" name="answer1" id="answer1" 
            value={answer1} 
            onChange={ev=> setAnswer1(ev.target.value)}/>

            {/* Second Security Question */}
            <select name="securityQuestion2" id="securityQuestion2"
            value={securityQuestion2} 
            onChange={ev=> setSecurityQuestion2(ev.target.value)}>
                <option value="">Select a security question</option>
                <option value="What is your favorite color?">What is your favorite color?</option>
                <option value="What is your favorite food?">What is your favorite food?</option>
                <option value="What is your favorite movie?">What is your favorite movie?</option>
            </select>
            <input type="text" placeholder="Answer" name="answer2" id="answer2" 
            value={answer2} 
            onChange={ev=> setAnswer2(ev.target.value)}/>

            {/* Third Security Question */}
            <select name="securityQuestion3" id="securityQuestion3"
            value={securityQuestion3} 
            onChange={ev=> setSecurityQuestion3(ev.target.value)}>
                <option value="">Select a security question</option>
                <option value="What is the name of your best friend?">What is the name of your best friend?</option>
                <option value="What is your favorite book?">What is your favorite book?</option>
                <option value="What is your dream vacation destination?">What is your dream vacation destination?</option>
            </select>
            <input type="text" placeholder="Answer" name="answer3" id="answer3" 
            value={answer3} 
            onChange={ev=> setAnswer3(ev.target.value)}/>

            <button className="primary">Create an account</button>
            <div className="text-center py-2 text-gray-500">Already have an account? <Link to={'/login'} className="underline text-black">Login now</Link></div>
        </form>
    </div>
</div>

            
    );
}