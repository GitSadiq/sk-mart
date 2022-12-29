import "../../scss/screens/products/index.scss";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { getAllAds } from "../../config/firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Products() {
  const param = useParams();
  const [productArray, setProductArray] = useState();

  const getProductArray = async () => {
    const resp = await getAllAds(param.name);
    setProductArray(resp.allAds);
    console.log(resp.allAds);
  };
  
  useEffect(() => {
    getProductArray();
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="product-body">
        <h3>{param.name}</h3>
        <Row gutter={[16, 16]} className="row">
          {productArray ? (
            productArray.map((item, index) => {
              return (
                <Col
                  key={index}
                  xs={{ span: 24 }}
                  sm={{ span: 8 }}
                  md={{ span: 8 }}
                  lg={{ span: 6 }}
                  className="Col"
                  onClick={() =>
                    navigate(`/productdetail/${item.category}/${item.docId}`)
                  }
                >
                  <Card
                    className="cards"
                    cover={<img alt="example" src={item.url[0]} />}
                  >
                    <div className="card-product-name">Rs: {item.price}</div>
                    <div className="card-product-content">{item.title}</div>
                    <div className="card-button">Add to cart</div>
                  </Card>
                </Col>
              );
            })
          ) : (
            <h1>Loading</h1>
          )}
        </Row>
      </div>
      <Footer />
    </div>
  );
}
