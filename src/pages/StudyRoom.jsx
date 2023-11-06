import React from "react";
import Header from "../components/Header";

function StudyRoom() {
  return (
    <>
      <div className="bg-[linear-gradient(to_right_bottom,rgba(234,88,12,0.5),rgba(67,20,7,0.5)),url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg')] h-screen bg-cover">
        <Header />
        <div className="flex justify-center items-center h-screen">
          <div className="grid grid-cols-4 gap-10">
            <button className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60">Room 1</button>
            <button className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60">Room 2</button>
            <button className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60">Room 3</button>
            <button className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60">Room 4</button>
            <button className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60">Room 5</button>
            <button className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60">Room 6</button>
            <button className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60">Room 7</button>
            <button className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60">Room 8</button>
            <button className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60">Room 9</button>
            <button className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60">Room 10</button>
            <button className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60">Room 11</button>
            <button className="bg-white p-4 text-white dark:bg-black rounded-lg border-double border-4 border-orange-500 h-40 w-60">Room 12</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudyRoom;
