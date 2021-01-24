import React, { useState, useEffect } from 'react'
import { useMutation, useQuery } from "@apollo/react-hooks"
import { GET_STUDENTS, DELETE_STUDENTS } from "./siteQueries"
import { lighten, makeStyles } from "@material-ui/core/styles"
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Row from "./requestRow"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Toolbar from '@material-ui/core/Toolbar';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography"
import LinearProgress from '@material-ui/core/LinearProgress';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "gatsby"
import createNotification from './notificationManager'
import ReactNotification from 'react-notifications-component'


const useToolbarStyles = makeStyles((theme) => ({
	root: {
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(1),
	},
	highlight:
		theme.palette.type === 'light'
			? {
				color: theme.palette.secondary.main,
				backgroundColor: lighten(theme.palette.secondary.light, 0.85),
			}
			: {
				color: theme.palette.text.primary,
				backgroundColor: theme.palette.secondary.dark,
			},
	title: {
		flex: '1 1 100%',
	},
	paper: {
		width: 400,
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	toolbar: {
		display: "flex",
		width: "100%",
		height: "50px",
		alignItems: "center"
	}
}));

const EnhancedTableToolbar = (props) => {
	const classes = useToolbarStyles();
	const { numSelected, onDelete } = props;

	return (
		<Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: numSelected > 0,
			})}
		>
			{numSelected > 0 ? (
				<Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
					{numSelected} Selected
				</Typography>
			) : (
					<div className={classes.toolbar}>
						<Typography className={classes.title} variant="h6" id="tableTitle" component="div">
							Students
						</Typography>
						<Link
							to={`/studentForm`}
							style={{
								color: `white`,
								textDecoration: `none`,
								display: "flex",
								alignItems: "center"
							}}
						>
							<Button
								size="small"
								variant="contained"
								color="primary"
								style={{ "width": "200px", "height": "30px" }}
								startIcon={<AddIcon />}
							>
								Add Student
							</Button>
						</Link>

					</div>
				)}

			{numSelected > 0 ? (
				<Tooltip title="Delete Request">
					<IconButton aria-label="delete" onClick={onDelete}>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : null}
		</Toolbar>
	);
};

export default function Students() {
	const classes = useToolbarStyles();
	const [documents, setDocuments] = useState([])
	const [loading, setLoading] = useState(true)
	const [selecteds, setSelecteds] = useState([])
	const [open, setOpen] = React.useState(false);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	let styles = {
		container: {
			"margin": "auto",
			"width": "100%",
			"padding": "10px",
			// "textAlign": "center",
			"borderRadius": "10px",
			"boxShadow": "0 16px 20px hsla(240,5%,53%,.06), 0 1px 12px hsla(240,5%,53%,.1), 0 16px 20px hsla(0,0%,94%,.6)",
			"position": "relative"
		}
	}

	useQuery(GET_STUDENTS, {
		fetchPolicy: "network-only",
		onCompleted: (d) => {
			setTimeout(() => setLoading(false), 2000)
			setDocuments(d.getStudents)
		}
	})

	const [deleteStudents] = useMutation(DELETE_STUDENTS, {
		onCompleted: (d) => {
			setLoading(false)
			setDocuments(d.deleteStudents)
			createNotification("Successfully deleted the Student!", "success", "Student Deleted")
		},
		onError:()=>{
			createNotification("Unable to delete the Student!", "danger", "Error")
		}
	})

	const handleClose = () => {
		setOpen(false);
	};

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	const handleDelete = async () => {
		let deletionIds = []
		selecteds.forEach((selected) => {
			let row = documents[selected]
			deletionIds.push(row._id)
		})
		deleteStudents({ variables: { dataObj: deletionIds } })
		setLoading(true)
		handleClose()
		setSelecteds([])
	}

	const body = (
		<div className={classes.paper}>
			<h2 id="simple-modal-title">Are you Sure?</h2>
			<p id="simple-modal-description">
				Student will be removed!
            </p>
			<div style={{ "textAlign": "right" }}>
				<Button size="small" variant="contained" style={{ "marginRight": "10px" }} onClick={() => { handleClose(); setSelecteds([]) }}>
					Nevermind
                </Button>
				<Button size="small" variant="contained" color="primary" onClick={handleDelete}>
					Yes, Delete
                </Button>
			</div>
		</div>
	);

	const isSelected = (_id) => selecteds.includes(_id);

	const handleSelect = (id) => {
		let allSelected = []
		if (selecteds.includes(id)) {
			documents.forEach(async (d, i) => {
				if (i !== id && selecteds.includes(i)) await allSelected.push(i)
			})
		} else {
			allSelected = selecteds.slice()
			allSelected.push(id)
		}
		setSelecteds(allSelected)
	}

	useEffect(() => { }, [documents])

	return (
		<>
			<ReactNotification/>
			<Modal
				open={open}
				onClose={handleClose}
				style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}
			>
				{body}
			</Modal>
			<Paper style={styles.container}>
				{loading ? <LinearProgress /> : null}
				<EnhancedTableToolbar numSelected={selecteds.length} onDelete={() => setOpen(true)} />
				<TableContainer component={Paper}>
					<Table aria-label="collapsible table">
						<TableHead>
							<TableRow>
								<TableCell></TableCell>
								<TableCell >CMS</TableCell>
								<TableCell align="center">Name</TableCell>
								<TableCell align="center">Email</TableCell>
								<TableCell align="center">Created At</TableCell>
								<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{documents.length > 0 ? (rowsPerPage > 0
								? documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								: documents).map((row, i) => {
									return (
										<Row
											key={i + page * rowsPerPage}
											row={row}
											isItemSelected={isSelected(i + page * rowsPerPage)}
											onSelect={() => handleSelect(i + page * rowsPerPage)}
										/>
									)
								})
								: null
							}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={documents.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</>
	)
}

