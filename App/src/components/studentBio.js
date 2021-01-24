import React, { useState, useEffect } from 'react'
import { useQuery } from "@apollo/react-hooks"
import { GET_STUDENT } from "./siteQueries"
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "gatsby"
import ReactNotification from 'react-notifications-component'

export default function StudentBio() {

    const [student, setStudent] = useState({})
    const [loading, setLoading] = useState(true)

    const urlParams = new URLSearchParams(window.location.search);

    const id = urlParams.get('id');

    useQuery(GET_STUDENT, {
        fetchPolicy: "network-only",
        variables: { id },
        onCompleted: (d) => {
            setTimeout(() => setLoading(false), 2000)
            setStudent(d.getStudent)
        }
    })

    useEffect(() => {
    }, [student])

    let styles = {
        container: {
            "margin": "auto",
            "width": "80%",
            "padding": "20px",
            "borderRadius": "10px",
            "boxShadow": "0 16px 20px hsla(240,5%,53%,.06), 0 1px 12px hsla(240,5%,53%,.1), 0 16px 20px hsla(0,0%,94%,.6)",
            "position": "relative"
        },
        bio: {
            display: "flex",
        },
        image: {
            height: "150px",
            width: "150px",
            "borderRadius": "10px",
            "boxShadow": "0 16px 20px hsla(240,5%,53%,.06), 0 1px 12px hsla(240,5%,53%,.1), 0 16px 20px hsla(0,0%,94%,.6)",
        },
        info: {
            paddingLeft: "20px",
            width: "100%"
        },
        typo: {
            display: "flex",
            alignItems: "center"
        },
        link: {
            color: `white`,
            textDecoration: `none`,
            display: "flex",
            alignItems: "center"
        }
    }

    return (
        <>
            <ReactNotification />
            <Paper style={styles.container}>
                {loading ? <LinearProgress /> : null}
                <div style={styles.bio}>
                    <div style={{ "textAlign": "center" }}>
                        <img src={student.profile} style={styles.image} alt="profile" />
                        <Typography variant="overline" display="block" gutterBottom style={styles.typo}>
                            {student.name}
                            <Link
                                to={`/studentForm?id=${id}`}
                                style={styles.link}
                            >
                                <IconButton color="primary" aria-label="edit student" component="span" size="small">
                                    <EditIcon />
                                </IconButton>
                            </Link>

                        </Typography>

                    </div>
                    <div style={styles.info}>
                        <Typography variant="overline" display="block" gutterBottom style={styles.typo}>
                            <EmailIcon /> &nbsp;&nbsp;Email : {student.email}
                        </Typography>
                        <Divider light />
                        <Typography variant="overline" display="block" gutterBottom style={styles.typo}>
                            <ConfirmationNumberIcon /> &nbsp;&nbsp;CMS : {student.cms}
                        </Typography>
                        <Divider light />
                        <Typography variant="overline" display="block" gutterBottom style={styles.typo}>
                            <GitHubIcon /> &nbsp;&nbsp;Github : <a href={student.github}>{student.github}</a>
                        </Typography>
                        <Divider light />
                        <Typography variant="overline" display="block" gutterBottom style={styles.typo}>
                            <HomeIcon /> &nbsp;&nbsp;Address : {student.address}
                        </Typography>
                        <Divider light />
                        <Typography variant="overline" display="block" gutterBottom style={styles.typo}>
                            {student.bio}
                        </Typography>
                    </div>
                </div>
            </Paper>
        </>
    )
}