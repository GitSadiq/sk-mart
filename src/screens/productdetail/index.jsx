import "../../scss/screens/productdetail/index.scss";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { Carousel, Col, Row, Image, Divider } from "antd";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { specificAd } from "../../config/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addcart } from "../../store/slices/cartSlice";
import swal from "sweetalert";

export default function Productdetail() {
  const param = useParams();
  const { category, docRef } = param;
  const [singleAd, setSingleAd] = useState();
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state);
  console.log(reduxData);
  const email = reduxData.uidSlice.email;
  console.log("email", email);
  let addtocart;
  if (singleAd) {
    let { price } = singleAd;
    addtocart = { ...singleAd, quantity: count, updatedprice: price * count };
  }

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      swal("Alert!", "You can't reduce the quantity from one!", "warning");
    }
  };
  const getSingleAd = async () => {
    const resp = await specificAd(category, docRef);
    setSingleAd(resp);
  };

  useEffect(() => {
    getSingleAd();
  }, []);

  const handleAddtoCart = () => {
    if (email) {
      dispatch(addcart(addtocart));
      swal(
        "Added to cart!",
        "This product added to your cart successfully!",
        "success"
      );
    } else {
      swal("Error!", "Login Required to add a products to cart!", "warning");
    }
  };

  return (
    <div>
      <NavBar />
      {singleAd ? (
        <div className="productdetail-body">
          <Row className="row" gutter={[42, 8]}>
            {/* <button className="edit-button">Edit Ad</button> */}
            <Col span={24} lg={{ span: 12 }}>
              <Carousel>
                {singleAd.url.map((item, index) => {
                  return <Image src={item} key={index} />;
                })}
              </Carousel>
              <div className="description-div">
                <h1>Description</h1>
                <Divider />
                <p>{singleAd.description}</p>
              </div>
            </Col>
            <Col span={24} lg={{ span: 12 }} className="col-2">
              <div className="title-price-location">
                <div className="pirce-icons">
                  <p className="price">Rs {singleAd.price * count} </p>
                  <div className="Icons-div">
                    <p className="icon">
                      <FiShare2 />
                    </p>
                    <p className="icon">
                      <AiOutlineHeart />
                    </p>
                  </div>
                </div>
                <p className="title">{singleAd.title}</p>
                <div className="quantity">
                  <p>Quantity: {count}</p>
                  <div className="increment-decrement-button">
                    <button
                      onClick={() => {
                        // dispatch(increment());
                        increment();
                      }}
                    >
                      +
                    </button>{" "}
                    <span>{count}</span>{" "}
                    <button
                      onClick={() => {
                        // dispatch(decrement(count));
                        decrement();
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className="add-to-cart-button">
                    <button
                      onClick={() => {
                        handleAddtoCart();
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="CheckOut-button">
                  <button>Proceed to CheckOut</button>
                </div>
              </div>
              <div className="seller-details">
                <p>Seller Description</p>
                <div className="seller-name">
                  <p>{singleAd.brandname}</p>
                </div>
                <div className="seller-chat">
                  <button>Chat with Seller</button>
                  <p>
                    <BsTelephone /> +92{singleAd.number}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
      <Footer />
    </div>
  );
}
