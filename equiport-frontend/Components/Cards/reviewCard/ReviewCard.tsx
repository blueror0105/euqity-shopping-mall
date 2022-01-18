import * as React from "react";

export interface IReviewCardProps {
  imageSource: string;
  review: string;
  name: string;
  compagnyName: string;
}

export default function ReviewCard(props: IReviewCardProps) {
  const { imageSource, review, name, compagnyName } = props;
  return (
    <div className="review-card">
      <div className="review-card__profile">
        <img className="review-card__profile-image" src={imageSource} />
        <div className="review-card__person-info">
          <div>{name}</div>
          <div>{compagnyName}</div>
        </div>
      </div>
      <div>{review}</div>
    </div>
  );
}
