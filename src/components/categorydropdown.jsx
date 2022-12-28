import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Dropdown, Space } from "antd";
import "../scss/components/categorydropdown.scss";
const items = [
  {
    label: <Link to="/comingsoon">Pharmacy</Link>,
    key: "0",
  },
  {
    label: <Link to="/products">General Grocery</Link>,
    key: "1",
  },
  {
    label: <Link to="/comingsoon">Bakery</Link>,
    key: "2",
  },
  {
    label: <Link to="/comingsoon">Fruits and Vegetables</Link>,
    key: "3",
  },
  {
    label: <Link to="/comingsoon">Dairy Products</Link>,
    key: "4",
  },
  {
    label: <Link to="/comingsoon">Snacks & Beverages</Link>,
    key: "5",
  },
  {
    label: <Link to="/comingsoon">All types of Meat</Link>,
    key: "6",
  },
  {
    label: <Link to="/comingsoon">Frozen Products</Link>,
    key: "7",
  },
  {
    label: <Link to="/comingsoon">Cleaning Products</Link>,
    key: "8",
  },
  {
    label: <Link to="/comingsoon">Skin Care</Link>,
    key: "9",
  },
];
const CategoryDropDown = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <Link onClick={(e) => e.preventDefault()}>
      <Space>Categories</Space>
    </Link>
  </Dropdown>
);
export default CategoryDropDown;
