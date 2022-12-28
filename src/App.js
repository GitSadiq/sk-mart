import NavBar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Login from "./screens/login/index.jsx";
import SignUp from "./screens/signup/index.jsx";
import Home from "./screens/home/index.jsx";
import Products from "./screens/products/index.jsx";
import Productdetail from "./screens/productdetail/index.jsx";
import CreateAds from "./screens/createads/index.jsx";
import "./App.scss"

function App() {
  return (
    <div >
      <NavBar />
      {/* <Login />
      <SignUp />
      <Home />
      <Products />
      <Productdetail /> */}
      <CreateAds />
      <Footer />
    </div>
  );
}

export default App;
