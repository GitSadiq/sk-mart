import "../../scss/screens/login-Signup/index.scss";
import * as React from "react";
import logo from "../../assets/images/sk-mart.png";
import { Input, Button, Form } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../../config/firebase";
import swal from "sweetalert";

export default function SignUp() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const alertuser = await userSignUp(values);
    if (alertuser.error) {
      swal("ERROR!", alertuser.message, "error");
    } else {
      swal("Success!", alertuser.message, "success");
      navigate("/login");
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
            name="username"
            rules={[
              { required: true, message: "Please input your Username!" },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input
              size="large"
              placeholder="User Name"
              prefix={<UserOutlined />}
              className={"username"}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your Email!" },
              { type: "email" },
            ]}
            hasFeedback
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
            rules={[
              { required: true },
              { min: 8 },
              {
                validator: (_, value) =>
                  value &&
                  value.match(/[a-z]/i) &&
                  value.match(/[0-9]/i) &&
                  value.match(/[" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]/i)
                    ? Promise.resolve("jnasjno")
                    : Promise.reject(
                        "Password includes alteast one number, one letter and one special character"
                      ),
              },
            ]}
            hasFeedback
          >
            <Input.Password
              size="large"
              placeholder="Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              className={"username"}
            />
          </Form.Item>
          <Form.Item
            name="Confirmation password"
            dependencies={["password"]}
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "The two passwords you entered does not match"
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password
              size="large"
              placeholder="Confirm Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              className={"username"}
            />
          </Form.Item>
          <Button htmlType="submit">SignUp</Button>
          <p>
            Or <Link to="/login">Already have an account!</Link>
          </p>
          <p>
            We won't reveal your email and password to anyone else nor use it to
            send you spam.
          </p>
        </Form>
      </div>
    </div>
  );
}
