import './index.css'

const CommentItem = props => {
  const {eachComment, isLikedImage, isDeleteButton} = props

  const {id, userName, userComment, date, isLiked, backgroundCommentColor} =
    eachComment

  const onClickLike = () => {
    isLikedImage(id)
  }

  const onClickDeleteButton = () => {
    isDeleteButton(id)
  }

  const likeText = isLiked ? 'add-color' : ''
  const userInsital = userName.slice(0, 1)
  const likedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="list-of-comment">
      <div className="inital-container">
        <p className={`intial ${backgroundCommentColor}`}>{userInsital}</p>
        <div className="name-and-comment">
          <h1 className="name">
            {userName}
            <span className="span-date">{date}</span>
          </h1>
          <p className="comment-content">{userComment}</p>
        </div>
      </div>
      <div className="like-and-delete">
        <div>
          <button
            className="like-delete-button"
            id={userName}
            onClick={onClickLike}
            testid="delete"
          >
            <img src={likedImage} className="like-image" alt="like" />
          </button>
          <label className={`like-content ${likeText}`} htmlFor={userName}>
            Like
          </label>
        </div>

        <button testid="delete" className="like-delete-button" onClick={onClickDeleteButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
