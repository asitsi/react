import React, { useEffect, useState } from "react";
import { user } from "./helper/adminapicall";

const ShowUsers = (blog) => {
  const [users, setUser] = useState([]);
  const [error, seterror] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    user().then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setUser(data.reverse());
        // console.log(data);
      }
    });
  };

  // console.log(blogs);

  return (
    <div>
      <div className="user_table container py-md-5 py-3">
        <div className="table-responsive container">
          <table className="table table-hover table-bordered shadow-lg rounded">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Phone</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user_data, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1})-</th>

                  <td>
                    <p>{user_data.name}</p>
                  </td>
                  <td>
                    <p>{user_data.email}</p>
                  </td>
                  <td>
                    <p>{user_data.age}</p>
                  </td>
                  <td>
                    <p>{user_data.phone}</p>
                  </td>
                  <td>
                    <p>{user_data.gender}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowUsers;
