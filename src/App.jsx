import './App.css'
import Navbar from './componnents/Navbar'
import ParticlesBg from "particles-bg";
import { useEffect, useState } from "react";
// import zigzac from './componnents/zigzac';
import FeatImage01 from './assets/features03image01.png'
import FeatImage02 from './assets/features03image02.png'
import FeatImage03 from './assets/features03image03.png'

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
    <div className=' h-screen' >
      
      <Navbar isMobile={isMobile} />
      <ParticlesBg type="random" bg={true} fixed={true} />
      <div className='w-full py-32 flex justify-center items-center flex-col gap-4'>
        <div className={`text-white ${isMobile ? 'text-2xl' : 'text-8xl'}`}>{`</> Feed`} <span className='text-green-500'> Code </span></div>
        <div className={`text-white ${isMobile ? 'px-5 text-sm' : 'px-72 text-2xl'} text-center`}>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </div>
      </div>
      
      <div className="particle-section">
      <ParticlesBg type="circle" bg={true} fixed={true} />
        <section>
          {/* <ParticlesBg  type="circle" bg={true}  h="100%"/> */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* <ParticlesBg  type="circle" bg={true}  h="100%"/> */}
            <div className="py-12 md:py-20 border-t border-gray-800">

              {/* Section header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-black bg-white rounded-full mb-4">Reach goals that matter</div>
                <h1 className="h2 mb-4">One product, unlimited solutions</h1>
                <p className="text-xl text-black">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
              </div>

              {/* Items */}
              <div className="grid gap-20">

                {/* 1st item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                    <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
                  </div>
                  {/* Content */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <div className="font-architects-daughter text-xl text-white mb-2">More speed. Less spend</div>
                      <h3 className="h3 mb-3">Keep projects on schedule</h3>
                      <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        <li className="flex items-center mb-2">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Duis aute irure dolor in reprehenderit</span>
                        </li>
                        <li className="flex items-center mb-2">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Excepteur sint occaecat</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Amet consectetur adipiscing elit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 2nd item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                    <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405} alt="Features 02" />
                  </div>
                  {/* Content */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                    <div className="md:pl-4 lg:pl-12 xl:pl-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                      <h3 className="h3 mb-3">Keep projects on schedule</h3>
                      <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        <li className="flex items-center mb-2">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Duis aute irure dolor in reprehenderit</span>
                        </li>
                        <li className="flex items-center mb-2">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Excepteur sint occaecat</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Amet consectetur adipiscing elit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3rd item */}
                <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                  {/* Image */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                    <img className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" />
                  </div>
                  {/* Content */}
                  <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                    <div className="md:pr-4 lg:pr-12 xl:pr-16">
                      <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div>
                      <h3 className="h3 mb-3">Keep projects on schedule</h3>
                      <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <ul className="text-lg text-gray-400 -mb-2">
                        <li className="flex items-center mb-2">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Duis aute irure dolor in reprehenderit</span>
                        </li>
                        <li className="flex items-center mb-2">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Excepteur sint occaecat</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <span>Amet consectetur adipiscing elit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      </div>
      {/* <Zigzac/> */}
    </div>

  )
}

export default App
