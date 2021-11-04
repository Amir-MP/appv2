import React, { useEffect, useState } from "react";
import { useTheme } from "../components/context/ThemeContext";
import accountService from "../components/services/accountService";

const Users = () => {
  useEffect(() => {
    const _accountService = new accountService();
    _accountService.getAllUser().then((res) => setUsers(res.data));
    
  }, []);

  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#171717 ",
    color: darkTheme ? "#CCC" : "#333",
  };
  const [users, setUsers] = useState([]);

  return (
    <div style={themeStyles} className="users" >
      <div  className=" container ">
        <div className="users   table-responsive ">
          {users.map((user) => {
            return (
              <table
                className="table table-striped table-bordered table-dark table-sm table-hover"
                key={user.id}
              >
                <thead>
                  <tr>
                    <th>Name</th>

                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bb ">
                    <td className="aa">{user.first_name}</td>
                    <td>{user.email}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Users;
