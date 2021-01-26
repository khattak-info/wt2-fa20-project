import React, {Fragment,useEffect,useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import {Link,withRouter} from 'react-router-dom';

import './ownStyle.css';
import '../Index.css';

function AddMember(props) {
        
        const nameEl = React.useRef(null);
        const cmsEl = React.useRef(null);
        const gnameEl = React.useRef(null);
        const bioEl = React.useRef(null);
        const urlEl = React.useRef(null);
        const imgEl = React.useRef(null);

        const handleSubmit = e => {
            e.preventDefault();
            const formData = {
              name: nameEl.current.value,
              cms: cmsEl.current.value,
              gname: gnameEl.value,
              bio: bioEl.value,
              url: urlEl.value,
              image: imgEl.value 
            }
            console.log(formData);
          };

        const display = (
            <Card>
            <Card.Body>
            <form onSubmit={handleSubmit}>
                <Card.Title>Name: </Card.Title>
                <input type="text" placeholder= "Enter Name" ref={nameEl} />
                <Card.Title>Enrollment Id: </Card.Title>
                <input type="text" placeholder="Enter Enrollment Id"  ref={cmsEl} />
                <Card.Title>Group Name: </Card.Title>
                <input type="text" placeholder="Enter Group Name"  ref={gnameEl} />
                <Card.Title>Bio: </Card.Title>
                <input type="text" placeholder="Enter Bio"  ref={bioEl} />
                <Card.Title>Github Link: </Card.Title>
                <input type="text" placeholder="Enter Github Link"  ref={urlEl} />
                <Card.Title>Image Url: </Card.Title>
                <input type="text" placeholder="Enter Image Url"  ref={imgEl} />
            </form>
            <Link to= "/" className="btn-primary"> Update </Link>
            </Card.Body>
            </Card>
        );
        return (
            <Fragment>
                <CardColumns className=" m-3 p-3 owncard "> {display}   </CardColumns>
                <hr></hr>
            </Fragment>
        );
    }
export default withRouter(AddMember);