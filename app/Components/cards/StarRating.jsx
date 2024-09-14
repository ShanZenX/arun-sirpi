// components/StarRating.js
import React from 'react';
import { Star } from 'lucide-react'; // Assuming you are using Lucide icons for stars

export default function StarRating({ count }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-5 w-5 ${
            index < count ? 'text-yellow-500' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}
