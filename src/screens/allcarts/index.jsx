import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import {
  updatecartdecrement,
  updatecartincrement,
  removecart,
} from "../../store/slices/cartSlice";
import "../../scss/screens/cart/index.scss";

function Carts() {
  const navigate = useNavigate();
  const reduxData = useSelector((state) => state);
  const cartArray = reduxData.cartSlice.cartArray;
  const dispatch = useDispatch();
  let total = 0;
  let shipping = 150;

  return (
    <div>
      <NavBar />
      {cartArray[0] ? (
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
            total = total + item.updatedprice;
            console.log(total);
            return (
              <Row key={index} gutter={[16, 16]} className="row-2">
                <Col span={4} className="col">
                  <img src={item.url[0]} alt="no found" />
                </Col>
                <Col span={6} className="col">
                  <p>{item.title}</p>
                </Col>
                <Col span={5} className="col">
                  <div className="quantity-div">
                    <button
                      onClick={() => dispatch(updatecartdecrement(index))}
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      onClick={() => dispatch(updatecartincrement(index))}
                    >
                      +
                    </button>
                  </div>
                </Col>
                <Col span={4} className="col">
                  <p>{item.updatedprice}</p>
                  <p>1 x {item.price}</p>
                </Col>
                <Col span={4} className="col">
                  <p
                    className="remove"
                    onClick={() => {
                      swal({
                        title: "Are you sure?",
                        text: "This item will be deleted from your cart!",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          dispatch(removecart(index))
                          swal("Your item has been deleted!", {
                            icon: "success",
                          });
                        } else {
                          swal("Your item is available in the cart");
                        }
                      });
                    }}
                  >
                    Remove
                  </p>
                </Col>
              </Row>
            );
          })}
          <Row gutter={[16, 16]} className="row-3">
            <Col span={24} className="col">
              <p
                className="remove"
                onClick={() => {
                  swal({
                    title: "Are you sure?",
                    text: "This item will be deleted from your cart!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  }).then((willDelete) => {
                    if (willDelete) {
                      dispatch(removecart())
                      swal("Your all items have been deleted! Now your cart is empty", {
                        icon: "success",
                      });
                    } else {
                      swal("Your all items are available in the cart!");
                    }
                  });
                }}
              >
                Remove all Carts
              </p>
            </Col>
          </Row>
          <hr />
          <Row gutter={[16, 16]} className="row-4">
            <Col span={24} className="col">
              <h2>Order Summary</h2>
            </Col>
          </Row>
          <hr />
          <Row gutter={[16, 16]} className="row-5">
            <Col span={12} className="col">
              <p>SubTotal</p>
            </Col>
            <Col span={12} className="col">
              <p>RS: {total}</p>
            </Col>
            <Col span={12} className="col">
              <p>Shipping Fee</p>
            </Col>
            <Col span={12} className="col">
              <p>RS: {shipping} </p>
            </Col>

            <Col span={12} className="col">
              <h2>Total</h2>
            </Col>
            <Col span={12} className="col">
              <h2>RS: {shipping + total} </h2>
            </Col>
            <Row gutter={[16, 16]} className="row-6">
              <Col span={24} className="col">
                <button onClick={() => navigate("/orderdetails")}>Proceed to Checkout</button>
              </Col>
            </Row>
          </Row>
        </div>
      ) : (
        <div className="empty-cart">
          <p>There are no items in this cart</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Carts;
