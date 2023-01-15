import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
