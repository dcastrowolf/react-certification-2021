import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --navbar-height: 3.5rem;
    }

    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0
    }
`;
