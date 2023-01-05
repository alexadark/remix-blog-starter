import { Link } from "@remix-run/react";
import MainMenu from "./MainMenu";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between align-center">
        <Link to="/">
          <h1 className="text-3xl font-bold">Alexandra Spalato</h1>
        </Link>
        <MainMenu />
      </div>
    </header>
  );
};

export default Header;
