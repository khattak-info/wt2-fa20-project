import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Moment from 'react-moment'
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "gatsby"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
    typography: {
        padding: theme.spacing(2),
        display: "block",
        width: "100%"
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    link:{
		color: `white`,
		textDecoration: `none`,
		display: "flex",
		alignItems: "center"
	}
}));

export default function Row(props) {
    const classes = useStyles();
    const { row, isItemSelected, onSelect } = props;

    return (
        <TableRow className={classes.root} style={{ "borderBottom": "1px solid rgba(0,0,0,0.2)" }}>
            <TableCell component="th" scope="row" >
                <Checkbox
                    checked={isItemSelected}
                    onClick={onSelect}
                />
            </TableCell>
            <TableCell component="th" scope="row">
                {row.cms}
            </TableCell>
            <TableCell>
                {row.name}
            </TableCell>
            <TableCell>
                {row.email}
            </TableCell>
            <TableCell component="th" scope="row" align="center">
                <Moment format="YYYY-MM-DD HH:mm">
                    {row.timestamp}
                </Moment>
            </TableCell>
            <TableCell align="center">
                <Link
                    to={`/studentBio?id=${row._id}`}
                    className={classes.link}
                >
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        size="small"
                    >
                        View Bio
                    </Button>
                </Link>
            </TableCell>
        </TableRow>
    );
}


