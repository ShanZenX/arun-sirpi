// components/CustomerReviews.js
import React from 'react';
import StarRating from '../Components/cards/StarRating';
import Title from '../Components/Text/Title';

const reviews = [
  {
    name: 'ரவி',
    rating: 5,
    review: 'இவர் செய்த உயர்வு வேலைகள் மிக அருமை! வீட்டின் தோற்றம் மிகவும் அழகாக மாறியுள்ளது.',
  },
  {
    name: 'சந்தோஷ்',
    rating: 4,
    review: 'நேர்த்தியான வேலை, ஆனால் சில முறை தாமதமாகிவிட்டது. கலைநயமான உயர்வு வேலைகள்.',
  },
  {
    name: 'அஜய்',
    rating: 5,
    review: 'நிறைவேற்றப்பட்ட வேலை எங்களின் எதிர்பார்ப்புகளை மிஞ்சியது. 100% திருப்தி.',
  },
  {
    name: 'குமார்',
    rating: 4,
    review: 'வேலை தரம் நன்றாக இருந்தது, ஆனால் கொஞ்சம் கூடுதல் செலவாகிவிட்டது.',
  },
];

export default function Customer() {
  return (
    <div className=" w-full mx-auto p-6  rounded-lg flex items-center flex-col">
<Title title={"Customer Reviews"} miniTitle={"Customer reviews for our previous work"}/>
      <div className="flex w-[88%] item-center flex-wrap justify-between  bg-black rounded-2xl p-10 my-10">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-md shadow w-full md:w-[48%] mb-10 ">
            <h3 className="text-xl font-semibold text-gray-700">{review.name}</h3>
            <StarRating count={review.rating} />
            <p className="mt-2 text-lg text-gray-600 font-tamil">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
