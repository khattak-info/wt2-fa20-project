import React,{ useState, useEffect } from 'react'
import { useQuery,useMutation } from "@apollo/react-hooks"
import { GET_STUDENT,EDIT_STUDENT, ADD_STUDENT} from "./siteQueries"
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {navigate} from "gatsby"
import createNotification from './notificationManager'

export default function StudentForm(){
    const [student, setStudent] = useState({})
    const [loading, setLoading] = useState(true)

    const urlParams = new URLSearchParams(window.location.search);

    const id = urlParams.get('id');

    useQuery(GET_STUDENT, {
        variables: { id },
        onCompleted: (d) => {
            setTimeout(() => setLoading(false), 2000)
            if(d.getStudent)setStudent(d.getStudent)
        }
    })

    const [editStudent] = useMutation(EDIT_STUDENT,{
        variables:{dataObj:student},
        onCompleted:(d)=>{
            createNotification("Successfully edited the student!","success","Student Edited")
            navigate(`/studentBio?id=${d.editStudent._id}`)
        },
        onError:()=>{
            createNotification("Unable to edit the student!","danger","Error")
            navigate(`/index`)
        }

    })

    const [addStudent] = useMutation(ADD_STUDENT,{
        variables:{dataObj:student},
        onCompleted:(d)=>{
            createNotification("Successfully created the student!","success","Student Created")
            navigate(`/studentBio?id=${d.addStudent._id}`)
        },
        onError:()=>{
            createNotification("Unable to add the student!","danger","Error")
            navigate(`/index`)
        }
    })

    let styles = {
        container: {
            "margin": "auto",
            "width": "80%",
            "padding": "20px",
            "borderRadius": "10px",
            "boxShadow": "0 16px 20px hsla(240,5%,53%,.06), 0 1px 12px hsla(240,5%,53%,.1), 0 16px 20px hsla(0,0%,94%,.6)",
            "position": "relative"
        },
        input:{
            width:"40%",
            margin:"20px 5%"
        },
        textArea:{
            margin:"20px 0px",
            width:"100%"
        }
    }

    const handleChange = (e)=>{
        let std = {...student}
        std[e.target.name]=e.target.value
        setStudent(std)
    }

    useEffect(() => {
    }, [student])

    return(
        <Paper style={styles.container}>
            <Typography variant="h4" gutterBottom>
                {id != null ? "Edit Student Info" : "Create New Student"}
            </Typography>
            {loading && id ? <LinearProgress /> : null}
            <TextField 
                style={styles.input} 
                value={student.name} 
                id="standard-basic" 
                label="Name" 
                InputLabelProps={{ shrink: true }}
                name="name"
                onChange={handleChange}
            />
            <TextField 
                style={styles.input} 
                value={student.email} 
                id="standard-basic" 
                label="Email" 
                InputLabelProps={{ shrink: true }}
                name="email"
                onChange={handleChange}
            />
            <TextField 
                style={styles.input} 
                value={student.cms} 
                id="standard-basic" 
                label="CMS" 
                InputLabelProps={{ shrink: true }}
                name="cms"
                onChange={handleChange}
            />
            <TextField 
                style={styles.input} 
                value={student.github} 
                id="standard-basic" 
                label="Github Link" 
                InputLabelProps={{ shrink: true }}
                name="github"
                onChange={handleChange}
            />
            <TextField 
                style={styles.input} 
                value={student.profile} 
                id="standard-basic" 
                label="Profile" 
                InputLabelProps={{ shrink: true }}
                name="profile"
                onChange={handleChange}
            />
            <TextField 
                style={styles.input} 
                value={student.address} 
                id="standard-basic" 
                label="Address" 
                InputLabelProps={{ shrink: true }}
                name="address"
                onChange={handleChange}
            />
            <TextareaAutosize 
                style={styles.textArea} 
                aria-label="minimum height" 
                rowsMin={3} 
                placeholder="Student's Bio" 
                value={student.bio}
                name="bio"
                onChange={handleChange}
            />
            <Button variant="contained" color="primary" size="small" onClick={()=>id != null ? editStudent() : addStudent()}>
                {id != null ? "Update" : "Add"}
            </Button>
        </Paper>
    )
}