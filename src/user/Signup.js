import React, { useState } from "react";
import "../styles.scss";
import Footer from "../core/Footer/Footer";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
import Pic from "../image/2853458.jpg";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
    gender: "",
    error: "",
    success: false,
  });

  const { name, email, password, age, phone, gender, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password, age, phone, gender })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            age: "",
            phone: "",
            gender: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="">
        <div className="register_form">
          <form className="">
            <img src={Pic} alt="img" className="Avtar_image img-fluid" />
            <h2>Sign up</h2>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("age")}
                type="text"
                value={age}
                placeholder="Age"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                onChange={handleChange("phone")}
                type="text"
                value={phone}
                placeholder="Phone-Number"
              />
            </div>
            <div className="form-group">
              <select
                className="form-control"
                onChange={handleChange("gender")}
                value={gender}
                id="exampleFormControlSelect1"
              >
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>others</option>
              </select>
            </div>
            <button onClick={onSubmit} className="submit_btn btn-block">
              Signup
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="">
        <div className="">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="">
        <div className="">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      <Footer />
    </div>
  );
};

export default Signup;
