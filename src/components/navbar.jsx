import "../scss/components/navbar.scss";
import logo from "../assets/images/sk-mart.png";
import CategorDropDown from "./categorydropdown";
import { Row, Col, Input, Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { isUserThere, logOut } from "../config/firebase";
import swal from "sweetalert";
import { getUid, getEmail } from "../store/slices/uidSlice";
import { useDispatch, useSelector } from "react-redux";
import { removecart } from "../store/slices/cartSlice";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Search } = Input;

export default function NavBar() {
  const [userUid, setUserUid] = useState();
  const [userEmail, setUserEmail] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state);
  const cartNumber = reduxData.cartSlice.cartArray.length
  // console.log("cart", reduxData.cartSlice.cartArray.length)

  useEffect(() => {
    isUserThere(setUserUid, setUserEmail);
    dispatch(getUid(userUid));
    dispatch(getEmail(userEmail));
  }, [userUid]);

  // console.log(reduxData);

  function handleLogout() {
    const resp = logOut();
    dispatch(getUid(false));
    dispatch(getEmail(false));
    dispatch(removecart());
    swal("Success!", resp.message, "success");
    navigate("/");
  }

  const onSearch = (value) => console.log(value);
  return (
    <div className="navbar-body">
      <Row gutter={[0, 0]} className="header-row">
        <Col
          className="navbar-col"
          xs={{ span: 8 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 3 }}
        >
          <img src={logo} alt="Not found" />
        </Col>
        <Col
          className="navbar-col"
          xs={{ span: 23 }}
          sm={{ span: 6 }}
          md={{ span: 18 }}
          lg={{ span: 8 }}
        >
          <Search
            size="large"
            placeholder="Enter keyword to search"
            onSearch={onSearch}
            enterButton
          />
        </Col>
        <Col
          className="navbar-col"
          xs={{ span: 6 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 2 }}
        >
          <p
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </p>
        </Col>
        <Col
          className="navbar-col"
          xs={{ span: 11 }}
          sm={{ span: 6 }}
          md={{ span: 6 }}
          lg={{ span: 3 }}
        >
          <CategorDropDown />
        </Col>
        <Col
          className="navbar-col"
          xs={{ span: 7 }}
          sm={{ span: 6 }}
          md={{ span: 4 }}
          lg={{ span: 2 }}
        >
          {reduxData.uidSlice.email === "admin@skmart.com" ? (
            <p
              onClick={() => {
                navigate("/createads");
              }}
            >
              Create Ads
            </p>
          ) : (
            <p>Contact</p>
          )}
        </Col>
        <Col
          className="navbar-col"
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 5 }}
          lg={{ span: 2 }}
        >
          {reduxData.uidSlice.uid ? (
            <p onClick={handleLogout}>LogOut</p>
          ) : (
            <p
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </p>
          )}
        </Col>
        <Col
          className="navbar-col"
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 5 }}
          lg={{ span: 2 }}
        >
          {reduxData.uidSlice.email === "admin@skmart.com" ? (
            <p
              onClick={() => {
                navigate("/order");
              }}
            >
              Orders
            </p>
          ) : (
            <p
              onClick={() => {
                navigate("/carts");
              }}
            >
              <Badge count={cartNumber}  size="small">
              <ShoppingCartOutlined />
              </Badge>
              {" "}
              Cart
            </p>
          )}
        </Col>
      </Row>
    </div>
  );
}
