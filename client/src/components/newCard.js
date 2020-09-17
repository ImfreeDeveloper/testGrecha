import React from 'react'
import {NavLink} from 'react-router-dom'

import { dateFormat } from '../helpers'

const NewCard = ({ id, title, image, datetime }) => {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <div className="image is-4by3" style={{backgroundImage: `url(${image})`}} />
        </div>
        <div className="card-content">
          <NavLink to={`/new/${id}`} className="title is-4">{ title }</NavLink>
          <div className="content">
          <p>{ dateFormat(datetime) }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewCard;
