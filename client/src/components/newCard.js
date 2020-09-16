import React from 'react'

const newCard = ({ title, image, datetime }) => {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <div className="image is-4by3">
            <img src={ image } alt={ title } />
          </div>
        </div>
        <div className="card-content">
          <p className="title is-4">{ title }</p>
          <div className="content">
          <p>{ datetime }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default newCard;
