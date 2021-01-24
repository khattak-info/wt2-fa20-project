import React, { useState, useEffect } from 'react'

const EditUserForm = props = {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () = {
      setUser(props.currentUser)
    },
    [ props ]
  )
   You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event = {
    const { name, value } = event.target

    setUser({ ...user, [name] value })
  }

  return (
    form
      onSubmit={event = {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    
      labelNamelabel
      input type=text name=name value={user.name} onChange={handleInputChange}  className=input
      labelCMSlabel
      input type=text name=CMS value={user.CMS} onChange={handleInputChange}  className=input
      labelEmaillabel
      input type=text name=email value={user.email} onChange={handleInputChange}  className=input
      button className=buttonUpdate userbutton
      button onClick={() = props.setEditing(false)} className=button button-red
        Cancel
      button
    form
  )
}

export default EditUserForm