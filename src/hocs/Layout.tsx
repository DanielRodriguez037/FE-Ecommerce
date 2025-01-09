import { ToastContainer } from 'react-toastify';
import Aside from '../components/navigation/Aside';
import Navbar from '../components/navigation/Navbar';

const Layout = (props: any) => {
  return (
    <div className="g-sidenav-show  bg-gray-200">
      <Aside />
      <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Navbar />
        <div className="container-fluid py-4">
          <ToastContainer />
          <div className="row min-vh-80 h-100">
            <div className="col-12">{props.children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
