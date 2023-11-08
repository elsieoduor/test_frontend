import React from 'react'

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      stars: 5,
      review: 'A beautiful home with an amazing view. Truly enjoyed my stay!',
    },
    {
      id: 2,
      name: 'Jane Smith',
      stars: 4,
      review: 'Great home, wonderful experience. Would love to visit again.',
    },
    // Add more reviews as needed
  ];

  return (
    <div className="lg:mx-32 mt-8 lg:mt-16">
      <p className="text-center text-3xl font-bold mb-4">Reviews</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="border rounded-lg overflow-hidden shadow-lg">
            <div className="p-4 flex items-center">
              <span className="font-bold">{review.name}</span>
              <div className="ml-auto flex">
                {[...Array(review.stars)].map((star, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 fill-current text-yellow-400 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 1l2.72 6.05 6.28.45-4.81 4.69 1.14 6.28-6.31-3.32-6.31 3.32 1.14-6.28-4.81-4.69 6.28-.45L10 1z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="italic p-4">&quot;{review.review}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Review