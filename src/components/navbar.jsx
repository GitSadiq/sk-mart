import "../scss/components/navbar.scss";
import logo from "../assets/images/sk-mart.png";
import CategorDropDown from "./categorydropdown";
import { Row, Col, Input } from "antd";
import { useNavigate } from "react-router-dom";
const { Search } = Input;

export default function NavBar() {
  const navigate = useNavigate();
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
          <p>Contact</p>
        </Col>
        <Col
          className="navbar-col"
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 5 }}
          lg={{ span: 2 }}
        >
          <p
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </p>
        </Col>
        <Col
          className="navbar-col"
          xs={{ span: 12 }}
          sm={{ span: 6 }}
          md={{ span: 5 }}
          lg={{ span: 2 }}
        >
          <p
            onClick={() => {
              navigate("./carts");
            }}
          >
            Cart
          </p>
        </Col>
      </Row>
    </div>
  );
}
