import "../../scss/screens/home/index.scss";
import pharmacy from "../../assets/images/pharmacy.jpg";
import bakery from "../../assets/images/Bakery.jpg";
import fruits from "../../assets/images/fruits.jpeg";
import dairy from "../../assets/images/dairy.jpg";
import snacks from "../../assets/images/snacks.png";
import meat from "../../assets/images/meat.jpeg";
import frozen from "../../assets/images/frozen.jpg";
import cleaning from "../../assets/images/cleaning.jpg";
import skincare from "../../assets/images/skincare.jpg";
import grocery from "../../assets/images/grocery.jpg";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "antd";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="home-body">
        <h3>Products Categories</h3>
        <Row gutter={[16, 16]} className="row">
          <Col
            xs={{ span: 24 }}
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            className="Col"
            onClick={() => {
              navigate("/products/Pharmacy");
            }}
          >
            <Card
              className="cards"
              cover={<img alt="example" src={pharmacy} />}
            >
              <div className="card-product-name">Pharmacy</div>
              <div className="card-product-content">We care, not just cure</div>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            className="Col"
            onClick={() => {
              navigate("/products/General Grocery");
            }}
          >
            <Card className="cards" cover={<img alt="example" src={grocery} />}>
              <div className="card-product-name">General Grocery</div>
              <div className="card-product-content">
                Packed with the essentials
              </div>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            className="Col"
            onClick={() => {
              navigate("/products/Bakery");
            }}
          >
            <Card className="cards" cover={<img alt="example" src={bakery} />}>
              <div className="card-product-name">Bakery</div>
              <div className="card-product-content">
                The perfect way to start your day
              </div>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            className="Col"
            onClick={() => {
              navigate("/products/Fruits & Vegetables");
            }}
          >
            <Card className="cards" cover={<img alt="example" src={fruits} />}>
              <div className="card-product-name">Fruits & Vegetables</div>
              <div className="card-product-content">
                Eat healthy, be nutrition wealthy
              </div>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            className="Col"
            onClick={() => {
              alert("Coming Soon");
            }}
          >
            <Card className="cards" cover={<img alt="example" src={dairy} />}>
              <div className="card-product-name">Dairy Products</div>
              <div className="card-product-content">
                Include it in your meal
              </div>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            className="Col"
            onClick={() => {
              alert("Coming Soon");
            }}
          >
            <Card className="cards" cover={<img alt="example" src={snacks} />}>
              <div className="card-product-name">Snacks & Beverages</div>
              <div className="card-product-content">
                It's like having a party in your mouth.
              </div>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            className="Col"
            onClick={() => {
              alert("Coming Soon");
            }}
          >
            <Card className="cards" cover={<img alt="example" src={meat} />}>
              <div className="card-product-name">All types of Meat</div>
              <div className="card-product-content">
                Only Sliced with The Best Butchers In Town
              </div>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            className="Col"
            onClick={() => {
              alert("Coming Soon");
            }}
          >
            <Card className="cards" cover={<img alt="example" src={frozen} />}>
              <div className="card-product-name">Forzen Food</div>
              <div className="card-product-content">
                Best range of frozen food
              </div>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            className="Col"
            onClick={() => {
              alert("Coming Soon");
            }}
          >
            <Card
              className="cards"
              cover={<img alt="example" src={cleaning} />}
            >
              <div className="card-product-name">Cleaning & laundry</div>
              <div className="card-product-content">
                A life full of Whiteness
              </div>
            </Card>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 8 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            className="Col"
            onClick={() => {
              alert("Coming Soon");
            }}
          >
            <Card
              className="cards"
              cover={<img alt="example" src={skincare} />}
            >
              <div className="card-product-name">Skin Care</div>
              <div className="card-product-content">
                Feel a new beauty experience
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
