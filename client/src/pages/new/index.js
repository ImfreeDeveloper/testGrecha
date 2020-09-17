import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'

import {
  fetchNew as fetchNewApi,
  fetchUser as fetchUserApi,
  fetchComments as fetchCommentsApi,
} from '../../api'
import ListComments from '../../components/listComments'
import { dateFormat } from '../../helpers'

const New = ({ match }) => {
  const slug = match.params.slug
  const [isLoaded, setIsLoaded] = useState(false);
  const [newItem, setNew] = useState({});
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Новость
        const dataNew = await fetchNewApi(slug)
        setNew(dataNew.data)
        // Автор
        const dataUser = await fetchUserApi(dataNew.data.authorId)
        setUser(dataUser.data)
        // Комменты
        const dataComments = await fetchCommentsApi(dataNew.data.id)
        setComments(dataComments.data)
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
          isLoaded && newItem
            ?
              <>
                <div className="card">
                  <div className="card-content">
                    <h1 className="title is-1">{ newItem.title }</h1>
                    <NavLink to={`/profile/${user.id}`} className="title is-4">{user.firstName} {user.lastName}</NavLink>
                    <p>{ dateFormat(newItem.datetime) }</p>
                  </div>
                  <div className="card-image">
                      <img src={ newItem.image } alt={ newItem.title } />
                  </div>
                  <div className="card-content" dangerouslySetInnerHTML={{__html: newItem.description }} />
                </div>
                <div className="card mt-6">
                  <div className="card-content">
                    <ListComments comments={comments} />
                  </div>
                </div>
              </>
            : null
      }

    </div>
  );
}

export default New;
