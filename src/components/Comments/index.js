import {Component} from 'react'
import './index.css'
import {formatDistanceToNow} from 'date-fns'
import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const userCommentList = [
  {
    id: uuidv4(),
    userName: 'Ranjith',
    userComment: 'This is wonderfull movie',
    date: formatDistanceToNow(new Date()),
    isLiked: false,
    backgroundCommentColor:
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ],
  },
]
class Comments extends Component {
  state = {commentList: [], userName: '', userComment: ''}

  onSubmitList = event => {
    event.preventDefault()

    const {userName, userComment} = this.state

    const newComment = {
      id: uuidv4(),
      userName,
      userComment,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      backgroundCommentColor:
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ],
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      userName: '',
      userComment: '',
    }))
  }

  isLikedImage = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  isDeleteButton = id => {
     const {commentList} = this.state
     const filterDeteleList = commentList.filter(eachComment => eachComment.id !== id)
     this.setState({commentList: filterDeteleList})
  }
  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeComment = event => {
    this.setState({userComment: event.target.value})
  }

  render() {
    const {userName, userComment, commentList} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="heading">Comments</h1>
          <p className="paragraph">Say Something about 4.0 Technologies</p>
          <div className="form-and-image-container">
            <form onSubmit={this.onSubmitList} className="form-container">
              <input
                value={userName}
                placeholder="Your Name"
                className="input"
                onChange={this.onChangeUserName}
              />
              <textarea
                rows="8"
                cols="55"
                value={userComment}
                placeholder="Your Comment"
                className="text-area"
                onChange={this.onChangeComment}
              ></textarea>
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-image"
            />
          </div>
          <hr className="horizontal-line" />
          <div className="comment-count-container">
            <p className="comment-count">{commentList.length}</p>
            <p className="comment-content">Comments</p>
          </div>
          <ul className="unorder-list-comment">
            {commentList.map(eachComment => (
              <CommentItem
                eachComment={eachComment}
                isLikedImage={this.isLikedImage}
                isDeleteButton = {this.isDeleteButton}
                key={eachComment.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
