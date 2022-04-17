import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Container,
  CreateAc,
  Form,
  Heading,
  Input,
  LinkForget,
  RememberContainer,
  Wrapper,
} from "./styles";
import { toast } from "react-toastify";
import { VisibilityOff } from "@material-ui/icons";
import { colors } from "../../themes";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  console.log({ formData });
  const loginUser = () => {
    if (formData.username === "amaan" && formData.password === "amaan@123") {
      navigate("/");
    } else {
      toast.error("Incorrect Username or Password");
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <Container>
      <Wrapper>
        <Heading>Login</Heading>
        <Form>
          <Input
            placeholder="amaan"
            onChange={(event) => {
              const value = event.target.value;
              setFormData({
                ...formData,
                username: value,
              });
            }}
          ></Input>

          <Input
            type={passwordShown ? "text" : "password"}
            placeholder="amaan@123"
            onChange={(event) => {
              const value = event.target.value;
              setFormData({
                ...formData,
                password: value,
              });
            }}
          ></Input>
          <VisibilityOff
            style={{ marginTop: "1.5rem" }}
            onClick={togglePassword}
            className="visibility"
          ></VisibilityOff>

          <RememberContainer>
            <Checkbox />
            REMEMBER ME!
          </RememberContainer>
          <CreateAc>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: `${colors.primaryColor}`,
              }}
            >
              CREATE NEW ACCOUNT
            </Link>
          </CreateAc>

          <Button onClick={loginUser}>LOGIN</Button>
          <Link
            to="/forgot-password"
            style={{ textDecoration: "none", color: `${colors.primaryColor}` }}
          >
            <LinkForget>FORGET PASSWORD</LinkForget>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
