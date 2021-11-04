import React from "react";
import { Form, Button } from "react-bootstrap";
import { useTheme } from "../components/context/ThemeContext";
const ContactUs = () => {
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#171717",
    color: darkTheme ? "#CCC" : "#333",
  };

  return (
    <div style={themeStyles} className="contact">
      <Form>
        <Form.Group
          className="mb-3 form-control-sm"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>آدرس ایمیل</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group
          className="mb-3 form-control-sm"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>متن</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="btn btn-secondary" type="submit">
          ثبت
        </Button>
      </Form>
    </div>
  );
};

export default ContactUs;
