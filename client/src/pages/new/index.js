import React, { useState, useEffect } from 'react'

import {
  fetchNew as fetchNewApi,
  fetchUser as fetchUserApi,
  fetchComments as fetchCommentsApi,
} from '../../api'
import Comment from '../../components/comment'

const New = ({ match }) => {
  const slug = match.params.slug
  const [error, setError] = useState(null);
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
        setError(error)
      }
    }
    fetchData();
  }, [])



  return (
    <div className="container">
      {
          isLoaded
            ?
              <>
                <div className="card">
                  <div className="card-content">
                    <h1 className="title is-1">{ newItem.title }</h1>
                    <p className="title is-4">{user.firstName} {user.lastName}</p>
                    <p>{ newItem.datetime }</p>
                  </div>
                  <div className="card-image">
                    <div className="image is-4by3">
                      <img src={ newItem.image } alt={ newItem.title } />
                    </div>
                  </div>
                  <div className="card-content" dangerouslySetInnerHTML={{__html: newItem.description }}></div>
                </div>
                <div className="card mt-6">
                  <div className="card-content">
                    <Comment>
                      <Comment/>
                      <Comment/>
                    </Comment>
                    <Comment/>
                  </div>
                </div>
              </>
            : <p>xcv</p>
      }

    </div>
  );
}

export default New;
