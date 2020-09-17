import React from 'react'

import Comment from './comment'

const ListComments = ({comments}) => {
  // Преобразуем плоскую структуру json для удобства
  const nestedComments = comments.filter((comment, idx, arr) => {
    if (comment.parentId === comment.storyId) return true;
    const parent = arr.find(item => item.id === comment.parentId);
    if (!parent) return true;
    (parent.children = parent.children || []).push(comment);
    return false
  });

  return (
    <>
      {
        comments && comments.length
          ? nestedComments.map(comment => <Comment comment={comment} key={comment.id} />)
          : <p>Нет комментариев</p>
      }
    </>
  )
}

export default ListComments
