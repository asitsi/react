import React, { useState } from "react";
import "../styles.scss";
import Footer from "../core/Footer/Footer";
import { Link, Redirect } from "react-router-dom";
import Pic from "../image/profile_pic.png";
import { signin, authenticate, isAutheticated } from "../auth/helper";
import TextField from "@material-ui/core/TextField";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    success: false,
    didRedirect: false,
  });

  const { email, password, error, loading, success, didRedirect } = values;
  const { user } = isAutheticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, success: true, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            success: false,
            loading: false,
          });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              success: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };

  const performRedirect = () => {
    //TODO: do a redirect here
    if (didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
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

  const signInForm = () => {
    return (
      <div className="">
        <div className="register_form">
          <form>
            <img src={Pic} alt="img" className="Avtar_image img-fluid" />
            <h2>WELCOME</h2>
            <div className="form-group">
              <input
                onChange={handleChange("email")}
                value={email}
                className="form-control"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="form-group">
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
                placeholder="Password"
              />
            </div>
            <button onClick={onSubmit} className="submit_btn btn-block">
              Signin
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      {loadingMessage()}
      {successMessage}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      <Footer />
    </div>
  );
};

export default Signin;
