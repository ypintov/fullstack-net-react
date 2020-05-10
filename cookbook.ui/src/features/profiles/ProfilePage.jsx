import React from 'react'

const ProfilePage = ({ match }) => {
  return <div>Profile Page : {match.params.username}</div>
}

export default ProfilePage
