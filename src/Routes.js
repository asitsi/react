import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
/////////////////// AdminRoute  ////////////////////
import AdminRoute from "./auth/helper/AdminRoutes";
import AdminDashBoard from "./user/AdminDashBoard";
import ManageBlogPost from "./admin/ManageBlogPost";
import AddNewBlog from "./admin/AddNewBlog";
import UpdateBlogPost from "./admin/UpdateBlogPost";
import AddFaculty from "./admin/AddFaculty";
import ManageFaculty from "./admin/ManageFaculty";
import UpdateFaculty from "./admin/UpdateFaculty";
import AddTesti from "./admin/AddTestimonial";
import ManageTesti from "./admin/ManageTestimonial";
import UpdateTesti from "./admin/UpdateTestimonial";
import Addfreecoursevideo from "./admin/Addfreecoursevideo";
import Managefreecoursevideo from "./admin/Managefreecoursevideo";
import Updatefreecoursevideo from "./admin/Updatefreecoursevideo";
import Addctetvideo from "./admin/AddCtetCourse";
import Managectetvideo from "./admin/ManageCtet";
import Updatectetvideo from "./admin/UpdateCtet";
import Users from "./admin/ShowUsers";
import LocalCommentPost from "./admin/LocalCommentPost";
import GetFeedback from "./admin/Feedback";
import AddCA from "./admin/AddCA";
import ManageCA from "./admin/ManageCA";
import AddCurrentAff from "./admin/AddCurrentAff";
import ManageCurrentAff from "./admin/ManageCurrentAff";
import AddPoll from "./admin/AddPoll";
import ManagePoll from "./admin/ManagePoll";
////////////////// PrivateRoute ////////////////////
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
////////////////// End PrivateRoute ////////////////////
import Home from "./core/Home/Home";
import Course from "./core/Courses/Course";
import Aboutus from "./core/Aboutus/Aboutus";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Navbar from "./core/Navbar/Navbar";
import Feedback from "./user/Feedback";
import Faculty from "./core/Faculty/Faculty";
import FreeCourse from "./core/Courses/Free/FreeCourse";
import CourseStructure from "./core/Courses/Free/CourseStructure";
import PlushonePlushtwo from "./core/Courses/Free/PlushonePlushtwo";
import CTET from "./core/Courses/Free/CTET";
import PaidCourse from "./core/Courses/Paid/PaidCourse";
import Blog from "./core/Blog/Blog";
import Fullblog from "./core/Blog/Fullblog";
import Card from "./core/Courses/Free/Card";
import FullCurrentAffairs from "./core/CurrentAffairs/FullCurrentAffairs";
import CACategory from "./core/CurrentAffairs/CACategory";
import FullPolls from "./core/Polls/FullPolls";
import Testimonial from "./core/Testimonial/Fulltestimonial";
import App from "./App";
const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/App" exact component={App} />
        <Route path="/" exact component={Home} />
        <Route path="/course" exact component={Course} />
        <Route path="/blog/:_Id" exact component={Fullblog} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/aboutus" exact component={Aboutus} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/feedback" exact component={Feedback} />
        <Route path="/faculty" exact component={Faculty} />
        <Route path="/card" exact component={Card} />
        <Route path="/freecourse" exact component={FreeCourse} />
        <Route
          path="/freecourse/:coursename"
          exact
          component={CourseStructure}
        />

        <Route path="/PlushonePlushtwo" exact component={PlushonePlushtwo} />
        <Route path="/CTET" exact component={CTET} />
        <Route path="/paidCourse" exact component={PaidCourse} />
        <Route path="/CACategory" exact component={CACategory} />
        <Route path="/allpolls" exact component={FullPolls} />
        <Route path="/allTestimonials" exact component={Testimonial} />
        <Route path="/currentaffeairs" exact component={FullCurrentAffairs} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
        <AdminRoute
          path="/admin/ManageBlogPost"
          exact
          component={ManageBlogPost}
        />
        <AdminRoute path="/admin/CreateBlogPost" exact component={AddNewBlog} />
        <AdminRoute
          path="/admin/blog/update/:blogId"
          exact
          component={UpdateBlogPost}
        />
        <AdminRoute
          path="/admin/ManageFaculty"
          exact
          component={ManageFaculty}
        />

        <AdminRoute path="/admin/CreateFaculty" exact component={AddFaculty} />
        <AdminRoute
          path="/admin/faculty/update/:facultyId"
          exact
          component={UpdateFaculty}
        />
        <AdminRoute path="/admin/ManageTesti" exact component={ManageTesti} />

        <AdminRoute path="/admin/CreateTesti" exact component={AddTesti} />
        <AdminRoute
          path="/admin/testi/update/:facultyId"
          exact
          component={UpdateTesti}
        />
        <AdminRoute
          path="/admin/CreateAddfreecoursevideo"
          exact
          component={Addfreecoursevideo}
        />
        <AdminRoute
          path="/admin/Managefreecoursevideo"
          exact
          component={Managefreecoursevideo}
        />
        <AdminRoute
          path="/admin/Updatefreecoursevideo/:freecourseId"
          exact
          component={Updatefreecoursevideo}
        />
        <AdminRoute
          path="/admin/CreateAddctetvideo"
          exact
          component={Addctetvideo}
        />
        <AdminRoute
          path="/admin/Managectetvideo"
          exact
          component={Managectetvideo}
        />
        <AdminRoute
          path="/admin/Updatectetvideo/:ctetId"
          exact
          component={Updatectetvideo}
        />
        <AdminRoute path="/admin/Users" exact component={Users} />
        <AdminRoute path="/admin/feedback" exact component={GetFeedback} />
        <AdminRoute
          path="/admin/LocalCommet"
          exact
          component={LocalCommentPost}
        />
        <AdminRoute
          path="/admin/AddCategoryCurrentAffairs"
          exact
          component={AddCA}
        />
        <AdminRoute
          path="/admin/ManageCurrentAffairsCategory"
          exact
          component={ManageCA}
        />
        <AdminRoute
          path="/admin/AddCurrentAffairs"
          exact
          component={AddCurrentAff}
        />
        <AdminRoute
          path="/admin/ManageCurrentAffairs"
          exact
          component={ManageCurrentAff}
        />
        <AdminRoute path="/admin/AddPoll" exact component={AddPoll} />
        <AdminRoute path="/admin/Polls" exact component={ManagePoll} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
