import "../../scss/screens/productdetail/index.scss";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { Carousel, Col, Row, Image, Divider } from "antd";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

export default function Productdetail() {
  return (
    <div>
      <NavBar />
      <div className="productdetail-body">
        <Row className="row" gutter={[42, 8]}>
          <button className="edit-button">Edit Ad</button>
          <button className="edit-button">go to dashboard</button>
          <Col span={24} lg={{ span: 12 }}>
            <Carousel>
              <Image
                src={
                  "https://cdn.shopify.com/s/files/1/0572/4779/3329/products/orgsize_47394Knorr-Noodles-Chatt-Patta-61gm-X-24_600x.png?v=1669889146"
                }
              />
              <Image
                src={
                  "https://cdn.shopify.com/s/files/1/0572/4779/3329/products/orgsize_47394Knorr-Noodles-Chatt-Patta-61gm-X-24_600x.png?v=1669889146"
                }
              />
            </Carousel>
            <div className="description-div">
              <h1>Description</h1>
              <Divider />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident asperiores dolore at rerum suscipit consectetur ut
                dolorem molestiae eligendi odit ipsa reiciendis illum doloribus
                itaque, cum laborum laboriosam, quo fugiat.
              </p>
            </div>
          </Col>
          <Col span={24} lg={{ span: 12 }} className="col-2">
            <div className="title-price-location">
              <div className="pirce-icons">
                <p className="price">Rs 23423094 </p>
                <div className="Icons-div">
                  <p className="icon">
                    <FiShare2 />
                  </p>
                  <p className="icon">
                    <AiOutlineHeart />
                  </p>
                </div>
              </div>
              <p className="title">
                Save Rs. 210 on Pack of 24 of Knorr Chatpatta Noodles 61 Gm Save
                Rs. 210 on Pack of 24 of Knorr Chatpatta Noodles 61 Gm
              </p>
              <div className="quantity">
                <p>Quantity: 0</p>
                <div className="increment-decrement-button">
                  <button>+</button> <span> 0</span> <button>-</button>
                </div>
                <div className="add-to-cart-button">
                  <button>Add to Cart</button>
                </div>
              </div>
              <div className="CheckOut-button">
                <button>Proceed to CheckOut</button>
              </div>
            </div>
            <div className="seller-details">
              <p>Seller Description</p>
              <div className="seller-name">
                <p>Sadiq</p>
              </div>
              <div className="seller-chat">
                <button>Chat with Seller</button>
                <p>
                  <BsTelephone /> +9234234235324
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}
