import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

import data from  '../data/data.json';
import './ownStyle.css';
import '../Index.css';

const  newdata= data.map( ( data) =>{
  return  (
    <Card key= {data.id}>
      <Card.Body>
        <img src= {data.image}alt="new" />
          <Card.Text>{data.name} </Card.Text>
          <Card.Title> Enrollment Id: { data.cms}</Card.Title>
          <Card.Title> Group Name: {data.gname} </Card.Title>
          <Card.Title>Github Link: <a href={data.url} target="_blank" rel=" noopener noreferrer">{data.url} </a></Card.Title>
          <Link to= {{pathname: `/details/${data.id}`}} className="btn-primary"> More Details </Link>
          <Link to= {{pathname: `/edit/${data.id}`}} className="btn-primary"  > Edit Details </Link>
          <Link to= {{pathname: `/delete/${data.id}`}} className="btn-primary"  > Delete Member </Link>
      </Card.Body>
    </Card>  
    )
    }
  ) 
export default class Main extends Component{
    render() {
        return (
          <Fragment>
            <h1>WELCOME TO TEAM THUNDERSTRIKE!</h1>
            <CardColumns className=" m-3 p-3 owncard ">  {newdata}  </CardColumns>
            <Link to={"/add"} className="btn-primary" > Add Member </Link>
            <hr></hr>
            </Fragment>
        )
    }
}