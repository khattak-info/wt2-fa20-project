import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', CMS: '', email: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.CMS || !user.email) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} className="input"/>
			<label>CMS</label>
			<input type="text" name="CMS" value={user.CMS} onChange={handleInputChange} className="input"/>
			<label>Email</label>
			<input type="text" name="email" value={user.email} onChange={handleInputChange} className="input"/>
			<button className="button button-blue">Add new user</button>
		</form>
	)
}

export default AddUserForm
