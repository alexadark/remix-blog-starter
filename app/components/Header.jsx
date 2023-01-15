import { Link } from "@remix-run/react";
import MainMenu from "./MainMenu";
import Search from "./search";
import Headroom from "react-headroom";

const Header = () => {
  return (
    <Headroom className="z-10">
      <header className="py-4 text-white bg-black">
        <div className="flex justify-between center-container">
          <Link to="/">
            <h1 className="text-3xl font-bold">My Blog</h1>
          </Link>
          <div className="flex justify-between gap-5">
            <MainMenu />
            <Search />
          </div>
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
