import { Outlet } from "react-router-dom";

import Header from "@/Layouts/Header/header";
import Footer from "@/Layouts/Footer/footer";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
