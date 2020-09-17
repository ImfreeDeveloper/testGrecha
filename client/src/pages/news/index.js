import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import NewCard from '../../components/newCard'
// actions
import { fetchNews } from '../../actions'

const News = () => {
  const countShowMore = 6
  const dispatch = useDispatch()
  const itemsNews = useSelector(({ news }) => news.items)
  const isLoaded = useSelector(({ news }) => news.isLoaded)
  const [showMore, setShowMore] = useState(true)
  const [countItemsNews, setCountItemsNews] = useState(countShowMore)

  useEffect(() => {
    if (isLoaded) {
      return
    }
    dispatch(fetchNews())
  }, [isLoaded, dispatch])

  const handleShowMore = () => {
    const countNewsAll = itemsNews.length
    const count = countItemsNews + countShowMore
    if (count >= countNewsAll) {
      setCountItemsNews(countNewsAll)
      setShowMore(false)
    } else {
      setCountItemsNews(count)
    }
  }

  return (
    <div className="container">
      {
        isLoaded && itemsNews.length
          ? (
            <>
              <div className="columns is-multiline">
                {
                  itemsNews.slice(0, countItemsNews).map(item => (
                    <NewCard
                      key={item.id}
                      { ...item }
                    />
                  ))
                }
              </div>
              {
                showMore
                  ?
                    <div className="columns has-text-centered">
                      <div className="column">
                        <p
                          className="button is-dark is-large"
                          onClick={handleShowMore}
                        >Показать еще</p>
                      </div>
                    </div>
                  : null
              }

            </>
          )
          : null
      }
    </div>
  )
}

export default News
