import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e)=>{
        e.preventDefault()
        const userObject = {
            username: username,
            email: email,
            password: password 
        }  

        try {
            const url = "http://localhost:3000/signup"    
            const signupFormUserData = await fetch(url,{
                method: "POST",
                headers:{
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(userObject)
            }) 
            const response = await signupFormUserData.json()
            if (response.message === 'success') {
                navigate('/login');
            }


        } catch (err) {
            console.log("React Error: ", err);
            
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#C83F12]">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-2 border-[#C83F12]">
                <h2 className="text-3xl font-bold text-center text-[#8A0000] mb-6">Sign Up</h2>
                <form className="flex flex-col gap-4" onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="p-3 rounded-lg border-2 border-[#8A0000] focus:outline-none focus:border-[#C83F12]"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="p-3 rounded-lg border-2 border-[#8A0000] focus:outline-none focus:border-[#C83F12]"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="p-3 rounded-lg border-2 border-[#8A0000] focus:outline-none focus:border-[#C83F12]"
                    />
                    <button
                        type="submit"
                        className="bg-[#C83F12] text-white p-3 rounded-lg font-semibold hover:bg-[#8A0000] transition"
                    >
                        Sign Up
                    </button>
                </form>
                <Link to="/login"
                    className="text-[#8A0000] hover:text-[#C83F12] font-medium mt-4 block text-center"
                > Already have an account?
                </Link>      
            </div>
        </div>
    );
};

export default Signup;
