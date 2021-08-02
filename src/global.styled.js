import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --navbar-height: 3.5rem;
        --icon-height-sq: 40px;
        --icon-width-sq: 40px;
        --main-background-color: ${({ theme }) => theme.background.primaryColor};
        --secondary-background-color: ${({ theme }) => theme.background.secondaryColor};
        --tertiary-color: ${({ theme }) => theme.background.tertiaryColor};
        --main-font-color: ${({ theme }) => theme.fonts.primaryColor};
        --secondary-font-color: ${({ theme }) => theme.fonts.secondaryColor};
        --searchbox-background-color: ${({ theme }) => theme.searchBox.backgroundColor};
        --searchbox-text-color: ${({ theme }) => theme.searchBox.textColor};
        --color-grey-1: ${({ theme }) => theme.colors.grey}
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

    body {
        background-color: var(--main-background-color);
        color: var(--main-font-color);
    }
`;
