import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    containerList: [],
    count: 0,
    containerBackgroundClassNames: initialContainerBackgroundClassNames,
  }

  inputText = event => {
    this.setState({name: event.target.value})
  }

  areaText = event => {
    this.setState({comment: event.target.value})
  }

  toggleLiked = id => {
    this.setState(prevState => ({
      containerList: prevState.containerList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  deleteCommand = id => {
    this.setState(prevState => ({
      containerList: prevState.containerList.filter(
        eachComment => eachComment.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    if (comment) {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
        isLiked: false,
      }
      this.setState(prevState => ({
        containerList: [...prevState.containerList, newComment],
        name: '',
        comment: '',
        count: prevState.count + 1,
      }))
    }
  }

  render() {
    const {
      name,
      comment,
      containerList,
      count,
      containerBackgroundClassNames,
    } = this.state
    return (
      <div className="bg-con">
        <div className="main-con">
          <form className="comment-con" onSubmit={this.addComment}>
            <h1>Comments</h1>
            <p>Say something about 4.O Technologies</p>
            <input
              className="input"
              value={name}
              type="text"
              placeholder="Your Name"
              onChange={this.inputText}
            />
            <textarea
              placeholder="Your Comment"
              rows="5"
              cols="50"
              value={comment}
              onChange={this.areaText}
            />
            <button type="submit" className="btn-add">
              Add Comment
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-emoj"
            />
          </div>
        </div>
        <hr className="straight-line" />
        <div className="main-comment">
          <div className="check-box-con">
            <button type="button" className="input-con">
              {count}
            </button>
            <p style={{padding: '10px'}}>Comments</p>
          </div>
          <ul>
            {containerList.map(commentItem => (
              <CommentItem
                key={commentItem.id}
                eachItem={commentItem}
                toggleLiked={this.toggleLiked}
                deleteCommand={this.deleteCommand}
                initialContainerBackgroundClassNames={
                  containerBackgroundClassNames
                }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
