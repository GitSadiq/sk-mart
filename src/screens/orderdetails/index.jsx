import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  orderSummary,
  shipDetail,
  removeOrderDetail,
} from "../../store/slices/orderSlice";
import { removecart } from "../../store/slices/cartSlice";
import { Steps, Row, Col, Form, Input, Button, Divider } from "antd";
import { FaShippingFast } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { TiHomeOutline } from "react-icons/ti";
import { BsCash } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { SolutionOutlined } from "@ant-design/icons";
import swal from "sweetalert";
import Footer from "../../components/footer";
import NavBar from "../../components/navbar";
import { order } from "../../config/firebase";
import "../../scss/screens/orderdetails/index.scss";
import { useNavigate } from "react-router-dom";

export default function Orderdetails() {
  const [current, setCurrent] = useState(0);

  const reduxData = useSelector((state) => state.cartSlice.cartArray);
  let subtotal = 0;
  let shipFee = 150;
  let total;
  console.log(reduxData);
  reduxData.map((item, index) => {
    subtotal = subtotal + item.updatedprice;
    total = subtotal + shipFee;
    return <></>;
  });

  const dispatch = useDispatch();

  const onFinishShippingDetails = (value) => {
    setCurrent(1);
    dispatch(shipDetail(value));
    dispatch(orderSummary({ subtotal, shipFee, total }));
  };

  const onFinishVerification = () => {
    setCurrent(2);
  };

  const form = [
    <Shipping finish={onFinishShippingDetails} />,
    <Verification finish={onFinishVerification} />,
    <Payment />,
  ];
  return (
    <div>
      <NavBar />
      <div className="orderdetail-body">
        <Row gutter={[16, 16]} className="row-1">
          <Steps current={current}>
            <Steps.Step
              title="Shipping Address"
              icon={<FaShippingFast />}
            ></Steps.Step>
            <Steps.Step
              title="Verification"
              icon={<SolutionOutlined />}
            ></Steps.Step>
            <Steps.Step
              title="Payment"
              icon={<RiSecurePaymentFill />}
            ></Steps.Step>
          </Steps>
        </Row>
        {form[current]}
      </div>
      <Footer />
    </div>
  );
}

function Shipping({ finish }) {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  return (
    <div className="shipping-body">
      <Row gutter={[16, 16]} className="row-1">
        <Col span={18} className="col">
          <Form {...layout} name="basic" onFinish={finish} className="form">
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  type: "text",
                },
                {
                  required: true,
                  message: "Please input your Name!",
                },
              ]}
            >
              <Input placeholder={"Name"} size="large" />
            </Form.Item>
            <Form.Item
              name="number"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                size="large"
                type="number"
                addonBefore={"+92"}
                placeholder="3168038489"
                className="input-number"
              />
            </Form.Item>
            <Form.Item
              name="address"
              label="Street Address"
              rules={[
                {
                  required: true,
                  message: "Please input your Street Address!",
                },
              ]}
            >
              <Input.TextArea
                rows={2}
                placeholder="House no., street, area, city"
              />
            </Form.Item>
            <Form.Item className="button">
              <Button className="button" type="primary" htmlType="submit">
                Continue
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

function Verification({ finish }) {
  const reduxData = useSelector((state) => state);
  const item = reduxData.cartSlice.cartArray;
  const price = reduxData.orderSlice.orderSummary;
  const shipDetail = reduxData.orderSlice.shipDetail;

  return (
    <div className="verification-body">
      <Row gutter={[16, 16]} className="row-1">
        <Col span={24} lg={{ span: 14 }} className="col">
          <h2>Shipping Details</h2>
          <Divider></Divider>
          <div>
            <div className="detail">
              <h4>Name:</h4>
              <p>{shipDetail.name}</p>
            </div>
            <div className="detail">
              <h4>Number:</h4>
              <p>{shipDetail.number}</p>
            </div>
            <div className="detail">
              <h4>Address:</h4>
              <p>{shipDetail.address}</p>
            </div>
          </div>
        </Col>
        <Col span={24} lg={{ span: 9, offset: 1 }} className="col-2">
          <h2>Order Summary</h2>
          <Divider></Divider>
          <div>
            <div className="detail">
              <h4>Total Item</h4>
              <p>{item.length}</p>
            </div>
            <div className="detail">
              <h4>SubTotal:</h4>
              <p>Rs: {price.subtotal}</p>
            </div>
            <div className="detail">
              <h4>Delivary Fee:</h4>
              <p>Rs: {price.shipFee}</p>
            </div>
            <div className="detail">
              <h4>Total:</h4>
              <p>Rs: {price.total}</p>
            </div>
          </div>
        </Col>
        <Col span={24} className="col-3">
          <Button className="button" onClick={finish}>
            Confirm
          </Button>
        </Col>
      </Row>
    </div>
  );
}

function Payment() {
  const reduxData = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Available = () => {
    swal({
      title: "Are you sure?",
      text: "This order will be proceed!",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Thanks for shopping with us!", {
          icon: "success",
        });
        order(reduxData);
        dispatch(removecart());
        dispatch(removeOrderDetail());
        navigate("/");
      } else {
        swal("your order is not placed");
      }
    });
  };

  const notAvailable = () => {
    swal("Sorry!", "This Service will available soon!");
  };

  return (
    <div className="payment-body">
      <Row gutter={[16, 16]} className="row-1">
        <Col span={24} className="col">
          <h1>Payment Methods</h1>
          <div className="payment-method">
            <Divider></Divider>
            <div onClick={() => notAvailable()} className="div">
              <div className="icon">
                <BsCash />
              </div>
              <div className="name">JAZZ CASH</div>
            </div>
            <div onClick={() => notAvailable()} className="div">
              <div className="icon">
                <BsCash />
              </div>
              <div className="name">EASY PAISA</div>
            </div>
            <div onClick={() => notAvailable()} className="div">
              <div className="icon">
                <BsBank />
              </div>
              <div className="name">BANK ACCOUNT</div>
            </div>
            <div onClick={() => Available()} className="div">
              <div className="icon">
                <TiHomeOutline />
              </div>
              <div className="name">Cash on Delivary</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
