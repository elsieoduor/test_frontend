import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ onAddReview }) => {
  const [name, setName] = useState('');
  const [stars, setStars] = useState(null);
  const [reviewText, setReviewText] = useState('');

  const handleStarsChange = (rating) => {
    setStars(rating);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleAddReview = () => {
    if (!name || !stars || !reviewText) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    const reviewData = {
      name,
      stars,
      review: reviewText,
    };

    onAddReview(reviewData);

    // Clear the form fields
    setName('');
    setStars(null);
    setReviewText('');
  };

  return (
    <div className="Rating">
      <div className="rating-card">
        {[...Array(5)].map((_, index) => (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={index + 1}
              onClick={() => handleStarsChange(index + 1)}
            />
            <FaStar
              className="star"
              size={50}
              color={index + 1 <= stars ? 'gold' : '#ccc'}
            />
          </label>
        ))}
      </div>
      {stars && <p style={styles.ratingText}>Your Rating is {stars}</p>}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={handleNameChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
      />
      <textarea
        placeholder="Leave a review..."
        value={reviewText}
        onChange={handleReviewTextChange}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
      />

      <button
        className="reviews_btn"
        onClick={handleAddReview}
        style={{ backgroundColor: '#E57C23', color: '#F8F1F1' }}
      >
        Submit
      </button>
    </div>
  );
};

const styles = {
  ratingText: {
    fontSize: '20px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    margin: '10px 0',
  },
};

export default Review;
