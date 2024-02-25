import './App.css'
import Navbar from './componnents/Navbar'
import { useEffect, useState } from "react";

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
   <div className='bg-gray-700 h-screen'>
    <Navbar isMobile={isMobile}/>
    <div className='w-full py-32 flex justify-center items-center flex-col gap-4'>
      <div className={`text-white ${isMobile ? 'text-2xl' : 'text-8xl'}`}>{`</> Feed`} <span className='text-green-500'> Code </span></div>
      <div className={`text-white ${isMobile ? 'px-5 text-sm' : 'px-72 text-2xl'} text-center`}>
      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </div>
    </div>
   </div>
  )
}

export default App
