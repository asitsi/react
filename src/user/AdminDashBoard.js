import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAutheticated } from "../auth/helper";
import "../styles.scss";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const AdminDashBoard = ({ history }) => {
  const {
    user: { name, email, role },
  } = isAutheticated();

  const AdminHeading = () => {
    return (
      <div className="admin_heading py-md-5 py-3">
        <h1 className="text-center">Welcome to Admin DashBoard</h1>
      </div>
    );
  };
  const AdminLeftSide = () => (
    <div className="AdminLeftSideNavigation_navbtn">
      <div className="fixed-down AdminLeftSideNavigation_navbtn">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark">
            <div className="card">
              <div className="card-header AdminLeftSideNavigation_header">
                Featured
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/dashboard"
                  >
                    <span></span>Dahsboard Home
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/CreateBlogPost"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Add New Post
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/ManageBlogPost"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Manage Blog Posts
                  </Link>
                </li>

                <li className="list-group-item">
                  <Link to="/admin/Polls" className="AdminLeftSideNavigation">
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Polls
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/admin/AddPoll" className="AdminLeftSideNavigation">
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Add new Poll
                  </Link>
                </li>

                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/ManageCurrentAffairs"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Current Affairs
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/AddCurrentAffairs"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Add new Current affairs
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/CreateFaculty"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Add Faculty
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/ManageFaculty"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Manage Faculty
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/CreateTesti"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Add Testimonial
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/ManageTesti"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    Manage Testimonial
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link className="AdminLeftSideNavigation" to="/admin/Users">
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    USER'S
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/feedback"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    User's Feedback
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    className="AdminLeftSideNavigation"
                    to="/admin/LocalCommet"
                  >
                    <span>
                      <ArrowForwardSharpIcon />
                    </span>
                    USER'S Issue
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
  );
  const AdminRightSide = () => {
    return (
      <div className="AdminRightSide mb-3">
        <div>
          <div className="card ">
            <div className="card-body ">
              <form>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Divetolearn.com"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Asit@123"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-sm-10">
                    <button
                      type="submit"
                      className="btn btn-success w-100 text-center"
                    >
                      THIS is your Login Email or password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container-fluid admin_background">
        {AdminHeading()}
        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">{AdminLeftSide()}</div>
          <div className="col-lg-9 col-md-6 col-12">{AdminRightSide()}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
