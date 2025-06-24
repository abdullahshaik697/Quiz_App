import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userObject = {
      email: email,
      password: password
    }

    const handleLogin = async (e) =>{
      e.preventDefault();
      try {
        const url = "http://localhost:3000/login"    
        const loginFormUserData = await fetch(url,{
            method: "POST",
            headers:{
              'Content-Type': "application/json"
            },
            body: JSON.stringify(userObject),
            credentials: 'include'
        })
        const response = await loginFormUserData.json()
        if(response.message === "success"){
            navigate('/home')
            
        }
      } catch (err) {
        console.log("React Error: ", err);
        
      }
     

    }
    
  return (
   <>
     <div className="min-h-screen flex items-center justify-center bg-[#C83F12]">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border-2 border-[#C83F12]">
        <h2 className="text-3xl font-bold text-center text-[#8A0000] mb-6">Login</h2>
         <form className="flex flex-col gap-4" onSubmit={handleLogin}>
         
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
            Login
          </button>
        </form>
      </div>
    </div>
   </>
  );
};

export default Login;
