import React from 'react'

import NewCard from '../../components/newCard'

const News = () => {
  return (
    <div class="container">
      <div className="columns is-multiline">
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
      </div>
      <div className="columns">
        <div className="column ">
          <a class="button is-dark is-large">Показать еще</a>
        </div>
      </div>
    </div>
  )
}

export default News
