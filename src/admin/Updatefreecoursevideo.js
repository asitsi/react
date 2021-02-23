import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PublishIcon from "@material-ui/icons/Publish";
import "../styles.scss";
import {
  getCategories,
  getoneFreecoursevideo,
  UpdateOneFreecoursevideos,
} from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";

const Updatevideo = ({ match }) => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    name: "",
    description: "",
    video: "",
    loading: false,
    error: "",
    createvideo: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    name,
    description,
    loading,
    error,
    createvideo,
    getaRedirect,
    formData,
  } = values;

  const preload = (freecourseId) => {
    getoneFreecoursevideo(freecourseId).then((data) => {
      //   console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: data.name,
          description: data.description,
          formData: new FormData(),
        });
      }
    });
  };

  const preloadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          categories: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    preload(match.params.freecourseId);
  }, []);

  //TODO: work on it
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    UpdateOneFreecoursevideos(
      match.params.freecourseId,
      user._id,
      token,
      formData
    ).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: "",
          description: "",
          video: "",
          loading: false,
          createvideo: data.name,
        });
      }
    });
  };

  const handleChange = (name) => (event) => {
    const value = name === "video" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createvideo ? "" : "none" }}
    >
      <h4>{createvideo} updated successfully</h4>
    </div>
  );

  const Updatevideoform = () => (
    <div className="BlogForm">
      {successMessage()}
      <form className="py-md-4 py-3">
        <div className="form-group">
          <label>Course Video Heading</label>
          <input
            onChange={handleChange("name")}
            type="text"
            name="video"
            className="form-control"
            placeholder="name"
            id="formGroupExampleInput"
            value={name}
            placeholder="Inter Your Heading Here"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlFile1">
            Upload Video Here <span> ** Video size not more then 16mb **</span>
          </label>
          <input
            onChange={handleChange("video")}
            type="file"
            name="video"
            accept="image"
            className="form-control-file"
            placeholder="choose a file"
            id="exampleFormControlFile1"
          />
        </div>
        <div className="form-group">
          <label for="formGroupExampleInput2">Faculty description</label>
          <textarea
            type="text"
            rows="5"
            cols="60"
            onChange={handleChange("description")}
            name="video"
            className="form-control"
            placeholder="Inter some description"
            value={description}
          />
        </div>

        <button type="submit" onClick={onSubmit} className="btn Submitbtn">
          <PublishIcon />
          Update Product
        </button>
      </form>
      <Link to="/admin/dashboard" className="Backbtn btn mb-2">
        <ArrowBackIcon /> Back to Dashboard
      </Link>
    </div>
  );

  return (
    <div>
      <div className="">{Updatevideoform()}</div>
    </div>
  );
};

export default Updatevideo;
