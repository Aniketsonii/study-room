import React from "react";
import Login from "../components/Login";
import Marquee from "../components/Marquee";
import Header from "../components/Header";

function Home() {
  return (
    <>
    
    <div className="bg-[linear-gradient(to_right_bottom,rgba(234,88,12,0.5),rgba(67,20,7,0.5)),url('https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] h-screen">
      <Header />
      <Login />
      <Marquee />
      </div>
    </>
  );
}

export default Home;
