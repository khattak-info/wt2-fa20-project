import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   <nav className="NavBar-Wrapper">
     <div>
       <h3 className="NavBar-Title">End Semester Project, Web Technologies 2</h3>
     </div>
     <div className="NavBar-Links">
      <Link to="/" className="NavBar-Link">Students' List</Link>
      <Link to="/add" className="NavBar-Link">Add a new student</Link>
     </div>
   </nav>
  );
};

export default Home;
