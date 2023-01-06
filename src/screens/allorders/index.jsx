import React, { useEffect, useState } from "react";
import { Row, Col, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { getAllAds } from "../../config/firebase";
import "../../scss/screens/allorders/index.scss";

function Adminorders() {
  const navigate = useNavigate();
  const [ordersArray, setOrderArray] = useState();

  const getorderdata = async () => {
    const resp = await getAllAds("orders");
    setOrderArray(resp.allAds);
  };

  useEffect(() => {
    getorderdata();
  }, []);

  console.log(ordersArray);

  return (
    <div>
      <NavBar />
      {ordersArray ? (
        <div className="cart-body">
          <h1>Orders</h1>
          {ordersArray.map((item, index) => {
            const items = item.items.cartArray;
            const payment = item.payment;
            const address = item.address;
            return (
              <div key={index}>
                <Divider>Order Number # {index + 1}</Divider>
                <div key={index} className="order-body">
                  <Row gutter={[1, 1]} className="row-1">
                    <Col span={6} className="col">
                      <div>
                        <p>Name</p>
                      </div>
                    </Col>
                    <Col span={18} className="col">
                      <div>
                        <p>{address.name}</p>
                      </div>
                    </Col>
                    <Col span={6} className="col">
                      <div>
                        <p>Number</p>
                      </div>
                    </Col>
                    <Col span={18} className="col">
                      <div>
                        <p>{address.number}</p>
                      </div>
                    </Col>
                    <Col span={6} className="col">
                      <div>
                        <p>Address</p>
                      </div>
                    </Col>
                    <Col span={18} className="col">
                      <div>
                        <p>{address.address}</p>
                      </div>
                    </Col>
                    <Col span={6} className="col">
                      <div>
                        <p>SubTotal</p>
                      </div>
                    </Col>
                    <Col span={18} className="col">
                      <div>
                        <p>{payment.subtotal}</p>
                      </div>
                    </Col>
                    <Col span={6} className="col">
                      <div>
                        <p>Shipping Fee</p>
                      </div>
                    </Col>
                    <Col span={18} className="col">
                      <div>
                        <p>{payment.shipFee}</p>
                      </div>
                    </Col>
                    <Col span={6} className="col">
                      <div>
                        <p>Total</p>
                      </div>
                    </Col>
                    <Col span={18} className="col">
                      <div>
                        <p>{payment.total}</p>
                      </div>
                    </Col>
                    <Col span={6} className="col">
                      <div>
                        <p>Number of Items</p>
                      </div>
                    </Col>
                    <Col span={18} className="col">
                      <div>
                        <p>{items.length}</p>
                      </div>
                    </Col>
                  </Row>
                  <Row gutter={[1, 1]} className="row-2">
                    <Col span={4} className="col">
                      <div>
                        <h3>Image</h3>
                      </div>
                    </Col>
                    <Col span={4} className="col">
                      <div>
                        <h3>Catogory</h3>
                      </div>
                    </Col>
                    <Col span={4} className="col">
                      <div>
                        <h3>Brand</h3>
                      </div>
                    </Col>
                    <Col span={6} className="col">
                      <div>
                        <h3>Title</h3>
                      </div>
                    </Col>
                    <Col span={3} className="col">
                      <div>
                        <h3>Quantity</h3>
                      </div>
                    </Col>
                    <Col span={3} className="col">
                      <div>
                        <h3>price</h3>
                      </div>
                    </Col>
                    <Divider />
                  </Row>
                  {items.map((item, index) => {
                    console.log(item);
                    const image = item.url[0];
                    return (
                      <div key={index}>
                        <Row gutter={[1, 1]} className="row-3">
                          <Col span={4} className="col">
                            <div>
                              <img src={image} alt="" />
                            </div>
                          </Col>
                          <Col span={4} className="col">
                            <div>
                              <p>{item.category}</p>
                            </div>
                          </Col>
                          <Col span={4} className="col">
                            <div>
                              <p>{item.brandname}</p>
                            </div>
                          </Col>
                          <Col span={6} className="col">
                            <div>
                              <p>{item.title}</p>
                            </div>
                          </Col>
                          <Col span={3} className="col">
                            <div>
                              <p>{item.quantity}</p>
                            </div>
                          </Col>
                          <Col span={3} className="col">
                            <div>
                              <p>{item.updatedprice}</p>
                            </div>
                          </Col>
                          <Divider />
                        </Row>
                      </div>
                    );
                  })}

                  <Row gutter={[16, 16]} className="row-3">
                    <Col span={24} className="col">
                      <button
                        className="remove"
                        onClick={() => {
                          swal({
                            title: "Is order completed?",
                            text: "This order will be deleted from your orders list!",
                            icon: "warning",
                            buttons: true,
                            dangerMode: true,
                          }).then((willDelete) => {
                            if (willDelete) {
                              swal("This Order remove from order list", {
                                icon: "success",
                              });
                            } else {
                              swal("Your all items are available in the cart!");
                            }
                          });
                        }}
                      >
                        Order Complete
                      </button>
                    </Col>
                  </Row>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-cart">
          <p>There are orders</p>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Adminorders;
