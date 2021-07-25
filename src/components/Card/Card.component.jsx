import React from 'react';
import {
  CardContainer,
  CardDescription,
  CardImg,
  CardImgWrapper,
  CardTitle,
} from './CardElements.styled';

function Card({ title, description, imgSrc, channel, publishedDate, videoId }) {
  return (
    <CardContainer>
      <CardImgWrapper to={`/video/${videoId}`}>
        <CardImg alt={`${title} | Image Video`} src={imgSrc} />
      </CardImgWrapper>
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        {description}
        <span>#{channel}</span>
        <span>{publishedDate}</span>
      </CardDescription>
    </CardContainer>
  );
}

export default Card;
