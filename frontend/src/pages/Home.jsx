import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HomePageFront from "../components/HomePageFront";

const Home = () => {
  // e.preventDefault()
  const [userData, setUserData] =useState()
  
  useEffect(()=>{
    const fetchUserData = async () =>{
      const url = "http://localhost:3000/home"          
      const homeUserData = await fetch(url,{
        method: 'GET',
        credentials: 'include'
      })
      const response = await homeUserData.json()
      setUserData(response)
    }
    
    fetchUserData()
  }
,[])
  return (
    <>
    {/* <h2 className="text-3xl font-bold text-center text-[#8A0000] mb-6">Welcome to Dashboard</h2> */}
     <Navbar userData = {userData}/>
     <HomePageFront/>
    </>
  );
};

export default Home;
