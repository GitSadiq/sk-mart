import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { Row, Col } from "antd";
import "../../scss/screens/cart/index.scss";

function Carts() {
  const reduxData = useSelector((state) => state);
  // console.log("cart", reduxData.cartSlice.cartArray)
  const cartArray = reduxData.cartSlice.cartArray;
  // console.log(cartArray);
  return (
    <div>
      <NavBar />
      <div className="cart-body">
        <h1>Cart</h1>
        <hr />
        <Row gutter={[16, 16]} className="row-1">
          <Col span={4} className="col">
            <h2>Image</h2>
          </Col>
          <Col span={6} className="col">
            <h2>Title</h2>
          </Col>
          <Col span={5} className="col">
            <h2>Quantity</h2>
          </Col>
          <Col span={4} className="col">
            <h2>price</h2>
          </Col>
          <Col span={4} className="col">
            <h2>Action</h2>
          </Col>
        </Row>
        <hr />

        {cartArray.map((item, index) => {
          return (
            <Row key={index} gutter={[16, 16]} className="row-2">
              <Col span={4} className="col">
                <img
                  src={item.url[0]}
                  alt="no found"
                />
              </Col>
              <Col span={6} className="col">
                <p>{item.title}</p>
              </Col>
              <Col span={5} className="col">
                <div className="quantity-div">
                  <button>+</button>
                  <p>{item.quantity}</p>
                  <button>-</button>
                </div>
              </Col>
              <Col span={4} className="col">
                <p>{item.updatedprice}</p>
                <p>1 x {item.price}</p>
              </Col>
              <Col span={4} className="col">
                <p className="remove">Remove</p>
              </Col>
            </Row>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Carts;
