import "../../scss/screens/login-Signup/index.scss";
import * as React from "react";
import { Input, Button, Form } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/images/sk-mart.png";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../config/firebase";
import swal from "sweetalert";

export default function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const alertlogin = await userLogin(values);
    if (alertlogin.error) {
      swal("ERROR!", alertlogin.message, "error");
    } else {
      swal("Success!", alertlogin.message, "success");
      navigate("/");
    }
  };

  return (
    <div className="login-signup-body">
      <div id="signUp-content-body">
        <img src={logo} alt="not found" />
        <h2>Welcome to SK MART</h2>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Email"
              prefix={<MailOutlined />}
              className={"username"}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              className={"username"}
            />
          </Form.Item>
          <Button htmlType="submit">Login</Button>
          <p>
            Or <Link to="/signup">Register Now!</Link>
          </p>
          <p>
            This site is protected by reCAPTCHA and the Google
            <Link to="/error"> Privacy Policy </Link>
            and <Link to="/error"> Terms of Service </Link> apply.
          </p>
        </Form>
      </div>
    </div>
  );
}
