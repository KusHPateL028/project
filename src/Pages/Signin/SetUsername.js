import React, { useState } from "react";
import Layout from "../../Layout/Signin/Index";
import { Stack, Typography } from "@mui/material";
import Input from "../../Components/Input/Index";
import { PersonOutline as PersonOutlineIcon } from "@mui/icons-material";
import Password from "../../Components/Password/Index";
import Button from "../../Components/Button/Index";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function SetUsername() {
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuth();

  const [inputValue, setValue] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [err, setErr] = useState({});

  const changeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const validateData = () => {
    const err = {};
    const regex =
      /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.{8,})[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/;

    if (inputValue.userName === "") {
      err.userName = "Enter Username";
    }
    if (inputValue.password === "") {
      err.password = "Enter Password";
    }
    if (inputValue.confirmPassword === "") {
      err.confirmPassword = "Enter Password";
    }
    if (inputValue.password !== inputValue.confirmPassword) {
      err.confirmPassword = "Password does not matched";
    }
    if (
      inputValue.confirmPassword !== "" &&
      inputValue.password === inputValue.confirmPassword &&
      inputValue.password.length < 8
    ) {
      err.confirmPassword = "Password must be 8 character long";
    }
    if (
      inputValue.confirmPassword !== "" &&
      inputValue.password === inputValue.confirmPassword &&
      !regex.test(inputValue.password) &&
      inputValue.password.length >= 8
    ) {
      err.confirmPassword =
        "Password must have numbers , character and special character.";
    }
    return err;
  };

  const clickHandler = (event) => {
    event.preventDefault();
    const err = validateData();
    if (Object.keys(err).length === 0) {
      navigate("/home");
      login();
    } else {
      setErr(err);
    }
  };
  return (
    <Layout width="800px" height="500px">
      <Stack
        spacing={3}
        alignItems={"center"}
        width="50%"
        component="form"
        justifyContent={"center"}
        onSubmit={clickHandler}
      >
        <Typography
          variant="h4"
          color="#0056FB"
          style={{ marginBottom: "20px", marginLeft: "40px" }}
        >
          Set User Name
        </Typography>
        <Stack spacing={2} alignItems={"center"} width="100%">
          <Stack direction="row" spacing={2} height={"55px"}>
            <PersonOutlineIcon style={{ marginTop: "10px" }} />
            <Input
              label="User Name"
              name="userName"
              type="text"
              size="small"
              value={inputValue.userName}
              onChange={changeHandler}
              err={Boolean(err.userName)}
              helperText={err.userName}
            ></Input>
          </Stack>
          <Stack width="70%" height={"55px"}>
            <Password
              label="Password"
              name="password"
              size="small"
              value={inputValue.password}
              onChange={changeHandler}
              err={Boolean(err.password)}
              helperText={err.password}
              sx={{ width: "100%" }}
            />
          </Stack>
          <Stack width="70%" height={"55px"}>
            <Password
              label="Confirm Password"
              name="confirmPassword"
              size="small"
              value={inputValue.confirmPassword}
              onChange={changeHandler}
              err={Boolean(err.confirmPassword)}
              helperText={err.confirmPassword}
              sx={{ width: "100%" }}
            />
          </Stack>
          <Stack
            direction="column"
            justifyContent={"center"}
            style={{ marginTop: "30px", marginLeft: "20px" }}
          >
            <Button variant="contained" type="submit" text="Sign In" />
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
}
