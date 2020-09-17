import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'

import { dateFormat } from '../helpers'

import {
  fetchUser as fetchUserApi
} from '../api'

const Comment = ({ comment }) => {
  let children = null;
  if (comment.children && comment.children.length) {
    children = (
      <>
        {comment.children.map(item => (
          <Comment comment={item} key={item.id} />
        ))}
      </>
    );
  }

  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        // Автор
        const dataUser = await fetchUserApi(comment.authorId)
        setUser(dataUser.data)
        setIsLoaded(true)
      } catch (err) {
        setIsLoaded(true)
      }
    }
    fetchData();
  }, [comment.authorId])

  return (
    <>
      {
        isLoaded && comment
          ? (
            <article className="media">
              <div className="media-left">
                <p className="image is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt={user.firstName} />
                </p>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>
                      <NavLink to={`/profile/${user.id}`} className="title is-6">{user.firstName} {user.lastName}</NavLink>
                    </strong>
                    <br />
                    { dateFormat(comment.datetime) }
                  </p>
                  <p dangerouslySetInnerHTML={{__html: comment.comment }}></p>
                  <br />
                </div>
                { children }
              </div>
            </article>
          )
          : null
      }
    </>
  )
}

export default Comment