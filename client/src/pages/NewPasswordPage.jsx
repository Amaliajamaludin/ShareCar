import { Link } from "react-router-dom";

export default function NewPasswordPage() {
    return(
        <div className="mt-4 grow flex items-center justify-around">
    <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Password Recovery</h1>
        <form className="max-w-md mx-auto" action="">
            <input type="email" placeholder='your@email.com' name="" id="" />
            <input type="password" placeholder="new password" name="" id="" />

            {/* First Security Question */}
            <select name="securityQuestion1" id="securityQuestion1">
                <option value="">Select a security question</option>
                <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                <option value="What is the name of your first pet?">What is the name of your first pet?</option>
                <option value="What is the city of your birth?">What is the city of your birth?</option>
            </select>
            <input type="text" placeholder="Answer" name="answer1" id="answer1" />
            {/* Second Security Question */}
            <select name="securityQuestion2" id="securityQuestion2">
                <option value="">Select a security question</option>
                <option value="What is your favorite color?">What is your favorite color?</option>
                <option value="What is your favorite food?">What is your favorite food?</option>
                <option value="What is your favorite movie?">What is your favorite movie?</option>
            </select>
            <input type="text" placeholder="Answer" name="answer2" id="answer2" />
            {/* Third Security Question */}
            <select name="securityQuestion3" id="securityQuestion3">
                <option value="">Select a security question</option>
                <option value="What is the name of your best friend?">What is the name of your best friend?</option>
                <option value="What is your favorite book?">What is your favorite book?</option>
                <option value="What is your dream vacation destination?">What is your dream vacation destination?</option>
            </select>
            <input type="text" placeholder="Answer" name="answer3" id="answer3" />

            <button className="primary">Change Password</button>
            <div className="text-center py-2 text-gray-500">Already have an account? <Link to={'/login'} className="underline text-black">Login now</Link></div>
        </form>
    </div>
</div>

            
    );
}