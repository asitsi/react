import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PublishIcon from "@material-ui/icons/Publish";
import "../styles.scss";
import {
  getCategories,
  getoneFaculty,
  UpdateOneFacultys,
} from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";

const UpdateFaculty = ({ match }) => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    name: "",
    qualification: "",
    skill: "",
    achievement: "",
    photo: "",
    loading: false,
    error: "",
    createfaculty: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    name,
    qualification,
    skill,
    achievement,
    loading,
    error,
    createfaculty,
    getaRedirect,
    formData,
  } = values;

  const preload = (facultyId) => {
    getoneFaculty(facultyId).then((data) => {
      //console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        preloadCategories();
        setValues({
          ...values,
          name: data.name,
          qualification: data.qualification,
          achievement: data.achievement,
          skill: data.skill,
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
    preload(match.params.facultyId);
  }, []);

  //TODO: work on it
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    UpdateOneFacultys(match.params.facultyId, user._id, token, formData).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            name: "",
            qualification: "",
            skill: "",
            achievement: "",
            photo: "",
            loading: false,
            createfaculty: data.name,
          });
        }
      }
    );
  };

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3"
      style={{ display: createfaculty ? "" : "none" }}
    >
      <h4>{createfaculty} updated successfully</h4>
    </div>
  );

  const createFacultyForm = () => (
    <div className="BlogForm">
      {successMessage()}
      <form className="py-md-4 py-3">
        <div className="form-group">
          <label>Faculty Name</label>
          <input
            onChange={handleChange("name")}
            type="text"
            name="photo"
            className="form-control"
            placeholder="name"
            id="formGroupExampleInput"
            value={name}
            placeholder="Inter Faculty Name Here"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlFile1">
            Upload Image Here <span> ** Image size not more then 10mb **</span>
          </label>
          <input
            onChange={handleChange("photo")}
            type="file"
            name="photo"
            accept="image"
            className="form-control-file"
            placeholder="choose a file"
            id="exampleFormControlFile1"
          />
        </div>
        <div className="form-group">
          <label> Faculty Skill</label>

          <input
            onChange={handleChange("skill")}
            name="skill"
            className="form-control"
            placeholder="Inpter your faculty Skill"
            value={skill}
            id="formGroupExampleInput"
          />
        </div>

        <div className="form-group">
          <label for="formGroupExampleInput2">Faculty Qualification</label>
          <textarea
            type="text"
            rows="5"
            cols="60"
            onChange={handleChange("qualification")}
            name="photo"
            className="form-control"
            placeholder="Qualification"
            value={qualification}
          />
        </div>

        <div className="form-group">
          <label for="formGroupExampleInput2">Faculty Achievement</label>

          <textarea
            type="text"
            rows="5"
            cols="60"
            onChange={handleChange("achievement")}
            name="photo"
            className="form-control"
            placeholder="Achievement"
            value={achievement}
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
      <div className="">{createFacultyForm()}</div>
    </div>
  );
};

export default UpdateFaculty;
