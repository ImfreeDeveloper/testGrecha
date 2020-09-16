import React from 'react'

const newCard = () => {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <div className="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </div>
        </div>
        <div className="card-content">
          <p className="title is-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="subtitle is-6">@johnsmith</p>
          <div className="content">
            <p>11:09 PM - 1 Jan 2016</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default newCard;
