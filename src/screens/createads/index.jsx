import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Button, Form, Input, Select, Upload } from "antd";
import "../../scss/screens/createads/index.scss";
import { layout } from "../../components/_variables";
import { getImageURL, createAd } from "../../config/firebase";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

export default function CreateAds() {
  const navigate = useNavigate();

  //multipe images
  const [imageData, setImageData] = useState();
  const [imageUrl, setImageUrl] = useState();

  const getImages = async () => {
    const urlimage = await getImageURL(imageData);
    setImageUrl(urlimage);
  };

  useEffect(() => {
    if (imageData) {
      getImages();
    }
  }, [imageData]);

  const onFinish = (value) => {
    // console.log(value);
    createAd(value, imageUrl);
    navigate("/");
  };

  //single image working done
  // const [imageData, setImageData] = useState();
  // const getImages = async () => {
  //   const urlimage = await getImageURL(imageData);
  //   console.log("images url", urlimage);
  // };

  // if (imageData) {
  //   getImages();
  // }

  return (
    <div>
      <NavBar />
      <div className="adspost">
        <div className="postcontent">
          <h3>Create Ad</h3>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            //   form={from}
            className="form"
          >
            <Form.Item
              name={["product", "category"]}
              label="Select Catgory"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
                size="large"
              >
                <Option value="Pharmacy">Pharmacy</Option>
                <Option value="General Grocery">General Grocery</Option>
                <Option value="Bakery">Bakery</Option>
                <Option value="Fruits & Vegetables">Fruits & Vegetables</Option>
                <Option value="Dairy Products">Dairy Products</Option>
                <Option value="Snacks & Beverages">Snacks & Beverages</Option>
                <Option value="Frozen Products">Frozen Products</Option>
                <Option value="Cleaning Products">Cleaning Products</Option>
                <Option value="Skin Care">Skin Care</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={["product", "title"]}
              label="Product Title"
              rules={[
                {
                  type: "text",
                },
                { required: true, message: "Please input your Product Title!" },
              ]}
            >
              <Input placeholder={"Mobile"} size="large" />
            </Form.Item>
            <Form.Item
              name={["product", "brandname"]}
              label="Brand Name"
              rules={[
                {
                  required: true,
                  message: "Please input your brandname!",
                },
              ]}
            >
              <Input placeholder="input brand name" size="large" />
            </Form.Item>
            <Form.Item
              name={["product", "price"]}
              label="Price"
              rules={[
                {
                  required: true,
                  message: "Please input your Product Price!",
                },
              ]}
            >
              <Input
                size="large"
                type="number"
                addonBefore={"RS"}
                placeholder="25000"
                className="input-number"
              />
            </Form.Item>
            <Form.Item
              name={["product", "number"]}
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
              name={["product", "images"]}
              label="Upload Images"
              rules={[
                {
                  required: true,
                  message: "Please upload the images!",
                },
              ]}
            >
              <Input
                size="large"
                type="file"
                multiple={true}
                className="input-number"
                onChange={(e) => setImageData(e.target.files)}
              />
            </Form.Item>
            <Form.Item name={["product", "description"]} label="Description">
              <Input.TextArea rows={4} placeholder="Product Detail" />
            </Form.Item>
            <Form.Item className="button">
              <Button className="button" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
