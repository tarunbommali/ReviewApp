import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsList} = this.props

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentReviewDetails = reviewsList[activeReviewIndex]
    const {imgUrl, username, companyName, description} = currentReviewDetails

    return (
      <div className="app-container">
        <h1>Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            className="arrow-button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p>{companyName}</p>

            <p>{description}</p>
          </div>
          <button
            type="button"
            onClick={this.onClickRightArrow}
            className="arrow-button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
