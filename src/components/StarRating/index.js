import React from 'react';
import { StarRatingList,StarRow,WhiteStars } from './styled';

const StarRating = () => {

  return (
    <StarRatingList>
      <StarRow>&#9733;&#9733;&#9733;&#9733;&#9733;</StarRow>
      <StarRow>&#9733;&#9733;&#9733;&#9733;<WhiteStars>&#9733;</WhiteStars></StarRow>
      <StarRow>&#9733;&#9733;&#9733;<WhiteStars>&#9733;&#9733;</WhiteStars></StarRow>
      <StarRow>&#9733;&#9733;<WhiteStars>&#9733;&#9733;&#9733;</WhiteStars></StarRow>
      <StarRow>&#9733;<WhiteStars>&#9733;&#9733;&#9733;&#9733;</WhiteStars></StarRow>
    </StarRatingList>
  );
};

export default StarRating;
