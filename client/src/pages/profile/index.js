import React, { useState, useEffect } from 'react'
import {
  fetchUser as fetchUserApi,
} from '../../api'

const Profile = ({ match }) => {
  const slug = match.params.slug
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const dataUser = await fetchUserApi(slug)
        setUser(dataUser.data)
        setIsLoaded(true)
      } catch (err) {
        setIsLoaded(true)
      }
    }
    fetchData();
  }, [slug])

  return (
    <div className="container">
      {
          isLoaded
            ? <h1 className="title is-1">{user.firstName} {user.lastName}</h1>
            : null
      }

    </div>
  );
}

export default Profile;
