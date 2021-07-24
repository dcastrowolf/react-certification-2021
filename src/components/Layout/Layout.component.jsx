import React from 'react';
import { Main } from './LayoutElements.styled';

function Layout({ children }) {
  return <Main>{children}</Main>;
}

export default Layout;
