// components/CustomerReviews.js
import React from 'react';
import StarRating from '../Components/cards/StarRating';
import Title from '../Components/Text/Title';
import Reviews from './Reviews';

const reviews = [
  {
    name: 'Karthik danush',
    rating: 5,
    review: 'His work is really very good and excellent.. As per what we said... He has done.. And he having the excellent and lot of desigs',
  },
  {
    name: 'Shesha thri',
    rating: 4,
    review: 'They are doing very good and excellent work. Work finishing is very nice 😊 I am fully satisfied with their disign. …',
  },
  {
    name: 'Prasanna Basker',
    rating: 5,
    review: 'Good skill and detailing in work. Also gives lot of options to select',
  },
  {
    name: 'Santhosh',
    rating: 4,
    review: 'What a lovely work its showing a perfect artists ..good to see you bro ..good luck'},
];

export default function Customer() {
  return (
    <div className=" w-full mx-auto md:p-6  rounded-lg flex items-center flex-col">
<Title title={"Customer Reviews"} miniTitle={"Customer reviews for our previous work"}/>
    
<Reviews/>
    </div>
  );
}
