import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Home = () => {
  

  return (
    <div>
      <Header />
      <main>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
