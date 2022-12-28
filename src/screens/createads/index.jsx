import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button, Form, Input, Select, Upload } from "antd";
import "../../scss/screens/createads/index.scss";
import NavBar from "../../components/navbar";
import Footer from "../../components/footer";
import { layout } from "../../components/_variables";
const { Option } = Select;

export default function CreateAds() {
  const onFinish = (value) => {
    console.log(value);
  };
  const [array, setArray] = useState();
  const normFile = (e) => {
    console.log("Upload event:", e.fileList);
    setArray(e.fileList);
    // if (Array.isArray(e)) {
    //   return e;
    // }
    // return e?.fileList;
  };
  console.log(array);

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
              name={["product", "gender"]}
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
                <Option value="Fruits and Vegetables">
                  Fruits and Vegetables
                </Option>
                <Option value="Dairy Products">Dairy Products</Option>
                <Option value="Snacks & Beverages">Snacks & Beverages</Option>
                <Option value="Frozen Products">Frozen Products</Option>
                <Option value="Cleaning Products">Cleaning Products</Option>
                <Option value="Skin Care">Skin Care</Option>
              </Select>
            </Form.Item>
            <Form.Item
              //form value save in nested object=>product is parent key and title is child key
              name={["product", "title"]}
              // name='title'  //This is the key to save form value in key value pair
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
            {/* <Form.Item
            name={["product", "image"]}
            label="URL"
            rules={[
              {
                required: true,
                message: "Please input your Product Image URL!",
              },
              { type: "url", warningOnly: true },
              { type: "string", min: 6 },
            ]}
          >
            <Input size="large" placeholder="Images URL" />
          </Form.Item> */}
            <Form.Item
              name="upload"
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="upload images"
            >
              <Upload
                multiple={true}
                name="logo"
                action="/upload.do"
                listType="picture"
              >
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
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
