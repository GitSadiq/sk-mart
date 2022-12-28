import Login from "../screens/login/index.jsx";
import SignUp from "../screens/signup/index.jsx";
import Home from "../screens/home/index.jsx";
import Products from "../screens/products/index.jsx";
import Productdetail from "../screens/productdetail/index.jsx";
import CreateAds from "../screens/createads/index.jsx";
import Carts from "../screens/allcarts/index.jsx"
import { BrowserRouter, Routes, Route, } from "react-router-dom";


function RouterWrapper() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/products" element={<Products />} />
                <Route path="/productdetail" element={<Productdetail />} />
                <Route path="/createAds" element={<CreateAds />} />
                <Route path="/carts" element={<Carts />} />
                <Route path="/comingsoon" element={<h1>Coming Soon</h1>} />
                <Route path="/error" element={<h1>This page is under maintenance</h1>} />

            </Routes>
        </BrowserRouter>
    );
}

export default RouterWrapper;