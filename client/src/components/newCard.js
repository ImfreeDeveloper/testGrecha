import React from 'react'

const newCard = () => {
  return (
    <div className="column is-4">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <p class="title is-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p class="subtitle is-6">@johnsmith</p>
          <div class="content">
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  )
}

export default newCard;
