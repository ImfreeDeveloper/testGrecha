import React from 'react'
import {NavLink} from 'react-router-dom'

const NewCard = ({ id, title, image, datetime }) => {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <div className="image is-4by3">
            <img src={ image } alt={ title } />
          </div>
        </div>
        <div className="card-content">
          <NavLink to={`/new/${id}`} className="title is-4">{ title }</NavLink>
          <div className="content">
          <p>{ datetime }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCard;
