import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import NewCard from '../../components/newCard'
// actions
import { fetchNews } from '../../actions'

const News = () => {
  const dispatch = useDispatch()
  const items = useSelector(({ news }) => news.items)
  const isLoaded = useSelector(({ news }) => news.isLoaded)

  useEffect(() => {
    dispatch(fetchNews())
  }, [dispatch])

  console.log(items);

  return (
    <div className="container">
      <div className="columns is-multiline">
        {
          isLoaded
            ? items.map(item => (
                <NewCard
                  key={item.id}
                  { ...item }
                />
              ))
            : <p>xcv</p>
        }
      </div>
      <div className="columns">
        <div className="column ">
          <a className="button is-dark is-large">Показать еще</a>
        </div>
      </div>
    </div>
  )
}

export default News
