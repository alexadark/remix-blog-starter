import { Link } from "@remix-run/react";
import MainMenu from "./MainMenu";
import Search from "./Search";

const Header = () => {
  return (
    <header className="py-4 text-white bg-black">
      <div className="flex justify-between center-container">
        <Link to="/">
          <h1 className="text-3xl font-bold">My Blog</h1>
        </Link>
        <MainMenu />
      </div>
      <Search />
    </header>
  );
};

export default Header;
