import React, { useState } from "react";
import "../styles.scss";
import Footer from "../core/Footer/Footer";
import { feedback } from "../auth/helper";

const Feedback = () => {
  const [value, setvalue] = useState({
    title: "",
    email: "",
    description: "",
    error: "",
    success: false,
  });

  const { title, email, description, error, success } = value;

  const onInputChange = (name) => (event) => {
    setvalue({ ...value, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setvalue({ ...value, error: false });
    feedback({ title, email, description })
      .then((data) => {
        if (data.error) {
          setvalue({ ...value, error: data.error, success: false });
        } else {
          setvalue({
            ...value,
            title: "",
            email: "",
            description: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in sending Feedback"));
  };

  const feedbackform = () => {
    return (
      <div>
        <div className="Feedback_form py-md-5 py-3">
          <form>
            <h1>FEEDBACK</h1>
            <p>
              '' We want to know what you thought of your experience at{" "}
              <span>Divtolearn</span>
              <br /> so we'd love to hear your feedback ''{" "}
            </p>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={onInputChange("title")}
                id="title"
                aria-describedby="textHelp"
                placeholder="tittle"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={onInputChange("email")}
                id="email"
                aria-describedby="textHelp"
                placeholder="Your Email"
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                rows="4"
                cols="50"
                className="form-control"
                value={description}
                onChange={onInputChange("description")}
                id="description"
                placeholder="Enter Your Feedback Here...!"
              ></textarea>
            </div>
            <button type="submit" onClick={onSubmit} className="submit_btn">
              Send Feedback
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
            thankyou for your Feedback
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
      {feedbackform()}
      <Footer />
    </div>
  );
};

export default Feedback;
