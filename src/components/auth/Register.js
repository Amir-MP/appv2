import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { userSchema } from "./validations/UserValidation";
import { useAlert } from "react-alert";
import { useTheme } from "../context/ThemeContext";
import  accountService  from '../services/accountService';

const  _accountService = new accountService(); 
const Register = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const alert = useAlert();
  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#171717",
    color: darkTheme ? "#CCC" : "#333",
  };

  const createUser = async (e) => {
    e.preventDefault();
    let formData = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
    console.log(formData);
    _accountService.register(email,password).then(res=>{
      console.log(res);
      console.log(localStorage.setItem('token',res.token));
    }).catch(err=>{
      console.error(err)
    });
    if (isValid !== true) {
      alert.show("ایمیل یا پسورد اشتباه است");
    }
  };

  return (
    <div style={themeStyles} className=" login">
      <Form onSubmit={createUser}>
        <Form.Group
          className=" mb-3 form-control-sm"
          controlId="formBasicEmail"
        >
          <Form.Label>آدرس ایمیل</Form.Label>
          <Form.Control
            type="text"
            placeholder="ایمیل را وارد کنید"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          className="formgroup mb-3 form-control-sm"
          controlId="formBasicPassword"
        >
          <Form.Label>رمز عبور</Form.Label>
          <Form.Control
            type="password"
            placeholder=" رمز عبور را وارد کنید"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="btn btn-secondary" type="submit">
          ثبت نام
        </Button>
      </Form>
    </div>
  );
};
//dd
export default Register;
