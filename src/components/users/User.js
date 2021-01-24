import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    cmsID: "",
    email: "",
    groupmembers: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-dark" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Student Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">cms id: {user.cmsID}</li>
        <li className="list-group-item">email: {user.email}</li>
        <li className="list-group-item">group members: {user.groupmembers}</li>
        <li className="list-group-item">guthub url: {user.github}</li>
      </ul>
    </div>
  );
};

export default User;
