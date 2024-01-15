import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

class CommentItem extends Component {
  render() {
    const {
      eachItem,
      initialContainerBackgroundClassNames,
      toggleLiked,
      deleteCommand,
    } = this.props

    // Choose a color class based on the index of the initial letter in the alphabet
    const colorClass =
      eachItem.name[0].toLowerCase().charCodeAt(0) %
      initialContainerBackgroundClassNames.length

    const isClickLiked = () => {
      toggleLiked(eachItem.id)
    }

    const deleteBtn = () => {
      deleteCommand(eachItem.id)
    }
    const dateComment = formatDistanceToNow(new Date())

    const likeImg = eachItem.isLiked
      ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

    const isBlueChanged = eachItem.isLiked
    return (
      <li key={eachItem.id}>
        <div className="li">
          <div className="initial-con">
            <h1
              className={`${initialContainerBackgroundClassNames[colorClass]} initial`}
            >
              {eachItem.name[0]}
            </h1>
          </div>
          <div className="name-con">
            <p className="p1">
              {eachItem.name} <span className="para">{dateComment}</span>
            </p>

            <p className="p">{eachItem.comment}</p>
          </div>
        </div>
        <div className="li">
          <div className="like-del-con">
            <button type="button" onClick={isClickLiked} className="btn-s">
              <img src={likeImg} alt="like" className="like-btn" />

              <span className={isBlueChanged ? 'addBlue' : 'addLike'}>
                Like
              </span>
            </button>
            <button
              type="button"
              className="btn-s"
              onClick={deleteBtn}
              data-testid="delete"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
                className="like-btn"
              />
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default CommentItem
