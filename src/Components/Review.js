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
    const reviewData = {
      name,
      stars,
      review: reviewText,
    };

    onAddReview(reviewData);

    // You can also make a fetch request to your backend to store the review data if needed

    // Clear the form fields
    setName('');
    setStars(null);
    setReviewText('');
  };

  return (
    <div className="Rating">
      <div className="rating-card">
        {[...Array(5)].map((star, index) => (
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

let styles = {
  ratingText: {
    fontSize: '20px',
    fontWeight: 'bold',
    font: 'italic',
    margin: '10px 0',
  },
};

export default Review;

// import React from 'react'

// const Review = () => {
//   const reviews = [
//     {
//       id: 1,
//       name: 'Mary Silas',
//       stars: 5,
//       review: 'A beautiful home with an amazing view. Truly enjoyed my stay!',
//     },
//     {
//       id: 2,
//       name: 'Derrick Smith',
//       stars: 4,
//       review: 'Great home, wonderful experience. Would love to visit again.',
//     },
//   ];

//   return (
//     <div className="lg:mx-32 mt-8 lg:mt-16">
//       <p className="text-center text-3xl font-bold mb-4">Reviews</p>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {reviews.map((review) => (
//           <div key={review.id} className="border rounded-lg overflow-hidden shadow-lg">
//             <div className="p-4 flex items-center">
//               <span className="font-bold">{review.name}</span>
//               <div className="ml-auto flex">
//                 {[...Array(review.stars)].map((star, index) => (
//                   <svg
//                     key={index}
//                     className="w-5 h-5 fill-current text-yellow-400 ml-1"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M10 1l2.72 6.05 6.28.45-4.81 4.69 1.14 6.28-6.31-3.32-6.31 3.32 1.14-6.28-4.81-4.69 6.28-.45L10 1z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//             <p className="italic p-4">&quot;{review.review}&quot;</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Review