import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
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

  console.log(isMobile);

  return (
    <div className={`text-white py-5 ${isMobile ? 'px-5' : 'px-10'} flex justify-between items-center`}>
      <div className="text-3xl"> Feed Code </div>

      {!isMobile && (
        <div className="flex gap-16">
          <Link to={"/"}>How we Work</Link>
          <Link to={"/"}>Services</Link>
          <Link to={"/"}>FAQ</Link>
        </div>
      )}

      <div className="flex gap-4 items-center">
        <Link
          to={"/"}
          className="bg-yellow-500 text-black px-2 py-1 rounded-2xl"
        >
          Connect with us
        </Link>
        <div>
          {isMobile && (
            <div>
              {" "}
              <IoMdMenu size={30} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
