import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PublishIcon from "@material-ui/icons/Publish";
import "../styles.scss";
import {
  getCategories,
  getoneBlog,
  UpdateOneBlogs,
} from "./helper/adminapicall";
import { isAutheticated } from "../auth/helper/index";

const UpdateProduct = ({ match }) => {
  const { user, token } = isAutheticated();

  const [values, setValues] = useState({
    title: "",
    description: "",
    tags: "",
    photo: "",
    loading: false,
    error: "",
    createdBlog: "",
    getaRedirect: false,
    formData: "",
  });

  const {
    title,
    description,
    tags,
    loading,
    error,
    createdBlog,
    getaRedirect,
    formData,
  } = values;

  const preload = (blogId) => {
    getoneBlog(blogId).then((data) => {
      //console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        preloadCategories();
        setValues({
          ...values,
          title: data.title,
          description: data.description,
          tags: data.tags,
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
    preload(match.params.blogId);
  }, []);

  //TODO: work on it
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });

    UpdateOneBlogs(match.params.blogId, user._id, token, formData).then(
      (data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          setValues({
            ...values,
            title: "",
            description: "",
            tags: "",
            photo: "",
            loading: false,
            createdBlog: data.name,
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
      style={{ display: createdBlog ? "" : "none" }}
    >
      <h4>{createdBlog} updated successfully</h4>
    </div>
  );

  const createBlogForm = () => (
    <div className="BlogForm">
      {successMessage()}
      <form className="py-md-4 py-3">
        <div className="form-group">
          <label>Blog Heading</label>
          <input
            onChange={handleChange("title")}
            type="text"
            name="photo"
            className="form-control"
            placeholder="Title"
            value={title}
            placeholder="Inter Your Heading Here"
          />
        </div>
        <div className="form-group">
          <label>Blog Tages</label>

          <input
            onChange={handleChange("tags")}
            name="Tags"
            className="form-control"
            placeholder="Inpter your Blog Tages"
            value={tags}
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
          <label for="formGroupExampleInput2">Blog Description</label>

          <textarea
            type="text"
            rows="5"
            cols="60"
            onChange={handleChange("description")}
            name="photo"
            className="form-control"
            placeholder="Description"
            value={description}
          />
        </div>

        <button type="submit" onClick={onSubmit} className="btn Submitbtn">
          <PublishIcon />
          Update Product
        </button>
      </form>
      <Link to="/admin/dashboard" className="Backbtn btn mb-2 ">
        <ArrowBackIcon /> Back to Dashboard
      </Link>
    </div>
  );

  return (
    <div>
      <div className="">{createBlogForm()}</div>
    </div>
  );
};

export default UpdateProduct;
