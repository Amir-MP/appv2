import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Button } from "react-bootstrap";
import { useTheme } from "../components/context/ThemeContext";
import {
  Form,
  FormControl,
  Row,
  Col,
  Container,
  InputGroup,
} from "react-bootstrap";
/* import { MultiSelect } from "react-multi-select-component"; */
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  children: yup.string().required(),
  idnumber: yup.string().min(10).max(10).required(),
  state: yup.string().required(),
  city: yup.string().required(),
  hood: yup.string().required(),
  date: yup.string().required(),
  phone: yup.string().min(10).max(10).required(),
  phone2: yup.string().min(10).max(10).required(),
  postalcode: yup.string().min(10).max(10).required(),
  blood: yup.string().required(),
});

const StudentRegister = () => {
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });
  /* const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  ]; */
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#171717",
    color: darkTheme ? "#CCC" : "#333",
  };

  const submitForm = (data) => {
    console.log(data);
    /* console.log(selected); */
  };

  return (
    <div style={themeStyles} className="studentregister ">
      <div className="Form ">
        <div className="title ">ثبت اطلاعات متقاضی</div>
        <div className="inputs ">
          <Container>
            <Form
              className="Forms mx-auto "
              onSubmit={handleSubmit(submitForm)}
            >
              <Form.Group className="md-4 ">
                <InputGroup className="InputGroup ">
                  <Row className="align-items-center">
                    <Col xs="auto" md={6}>
                      <FormControl
                        className="ss"
                        size="lg mb-2 "
                        type="text"
                        name="firstName"
                        placeholder="نام"
                        {...register("firstName", {
                          required: "Required",
                        })}
                      />
                      <FormControl
                        className="ss"
                        size="lg mb-2"
                        type="text"
                        name="lastName"
                        placeholder="نام خانوادگی"
                        {...register("lastName", {
                          required: "Required",
                        })}
                      />
                      <FormControl
                        className="ss"
                        size="lg mb-2 "
                        type="text"
                        name="email"
                        placeholder="ایمیل"
                        {...register("email", {
                          required: "Required",
                        })}
                      />

                      <FormControl
                        className="ss"
                        size="lg mb-2"
                        type="text"
                        name="children"
                        placeholder="تعداد فرزند"
                        {...register("children", {
                          required: "Required",
                        })}
                      />
                      <FormControl
                        className="ss"
                        size="lg mb-2"
                        type="text"
                        name="idnumber"
                        placeholder="کد ملی"
                        {...register("idnumber", {
                          required: "Required",
                        })}
                      />
                      <Controller
                        control={control}
                        name="date"
                        rules={{ required: true }} //optional
                        render={({ field: { onChange, name, value } }) => (
                          <>
                            <DatePicker
                              style={{
                                width: "100%",
                                boxSizing: "border-box",
                                height: "50px",
                                borderRadius: "10px",
                              }}
                              containerStyle={{
                                width: "213%",
                              }}
                              value={value || ""}
                              onChange={(date) => {
                                onChange(date?.isValid ? date : "");
                              }}
                              placeholder="تاریخ تولد"
                              calendar={persian}
                              locale={persian_fa}
                              calendarPosition="bottom-right"
                            />
                          </>
                        )}
                      />

                      <FormControl
                        className="ss"
                        size="lg mb-2 mt-2"
                        type="text"
                        name="state"
                        placeholder="استان"
                        {...register("state", {
                          required: "Required",
                        })}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={6}>
                      <FormControl
                        className="ss"
                        size="lg mb-2"
                        type="text"
                        name="city"
                        placeholder="شهر"
                        {...register("city", {
                          required: "Required",
                        })}
                      />
                      <FormControl
                        className="ss"
                        size="lg mb-2"
                        type="text"
                        name="hood"
                        placeholder="محله"
                        {...register("hood", {
                          required: "Required",
                        })}
                      />
                      <FormControl
                        className="ss"
                        size="lg mb-2"
                        type="text"
                        name="phone"
                        placeholder="تلفن منزل"
                        {...register("phone", {
                          required: "Required",
                        })}
                      />
                      <FormControl
                        className="ss"
                        size="lg mb-2"
                        type="text"
                        name="phone2"
                        placeholder="تلفن همراه"
                        {...register("phone2", {
                          required: "Required",
                        })}
                      />
                      <FormControl
                        className="ss"
                        size="lg mb-2"
                        type="text"
                        name="postalcode"
                        placeholder="کد پستی"
                        {...register("postalcode", {
                          required: "Required",
                        })}
                      />
                      <FormControl
                        className="ss"
                        size="lg mb-2"
                        type="text"
                        name="adress"
                        placeholder="آدرس"
                        {...register("adress", {
                          required: "Required",
                        })}
                      />

                      <Form.Select
                        size="lg mb-2"
                        className="ss"
                        name="blood"
                        id="inlineFormCustomSelect"
                        {...register("blood", {
                          required: "Required",
                        })}
                      >
                        <option value="0">گروه خونی</option>
                        <option value="1">O+</option>
                        <option value="2">O-</option>
                        <option value="3">A+</option>
                        <option value="4">A-</option>
                        <option value="5">B+</option>
                        <option value="6">B-</option>
                        <option value="7">AB+</option>
                        <option value="8">AB-</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </InputGroup>
              </Form.Group>
              <Button
                type="submit"
                id="submit"
                className="submit"
                variant="secondary"
              >
                {" "}
                ثبت
              </Button>
            </Form>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;
