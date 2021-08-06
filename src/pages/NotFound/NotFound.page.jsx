import React from 'react';
import { GoHomeLink, NotFoundImage, NotFoundSection } from './NotFoundElements.styled';

function NotFoundPage() {
  return (
    <NotFoundSection>
      <GoHomeLink to="/">Go home</GoHomeLink>
      <NotFoundImage>
        <img
          src="/NotFoundCat.png"
          alt="page not found"
          aria-label="Page not found GIF image"
        />
        <figcaption>
          &copy;
          <a href="https://www.freepik.com/vectors/animals">
            Animals vector created by stories - www.freepik.com
          </a>
        </figcaption>
      </NotFoundImage>
    </NotFoundSection>
  );
}

export default NotFoundPage;
