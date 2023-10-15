import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSplitCross } from "react-icons/gi";
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const menuItems = useMemo(
    () => [
      { id: 1, text: "Home", href: "/" },
      { id: 3, text: "product", href: "/product" },
      { id: 5, text: "Contact Us", href: "/contactUs" },
      { id: 4, text: "Service (N/A)", href: "service" },
      { id: 6, text: "About Us(N/A)", href: "aboutUs" },
    ],
    []
  );

  return (
    <header
      className="flex items-center justify-around w-full py-2 bg-transparent border-b "
      id="mainHeader"
    >
      <div className="logo">
        <img src="./logo.png" alt="logo" />
      </div>
      <div className="grid w-full m-5 text-2xl place-items-end md:hidden">
        <button onClick={() => setOpenNav(!openNav)}>
          <RxHamburgerMenu />
        </button>
      </div>
      <div
        id="hamburger"
        className={`absolute w-full h-full top-0 transition-opacity duration-300 z-10 ${
          openNav ? "block" : "hidden"
        }`}
      >
        <div className="w-full bg-white mobile-list">
          <ul className="relative flex flex-col items-center justify-center gap-7 p-14">
            <button
              // variant="ghost"
              className="absolute text-2xl text-black right-10 top-4"
              onClick={() => setOpenNav(!openNav)}
            >
              <GiSplitCross />
            </button>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className="font-semibold text-black cursor-pointer "
                  activeClass="active"
                  smooth
                  spy
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navlist">
        <ul className="items-center justify-around hidden gap-5 md:flex">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.href}
                activeClass="active"
                smooth
                spy
                className="cursor-pointer "
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
