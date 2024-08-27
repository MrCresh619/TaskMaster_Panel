'use client';
import { css, createGlobalStyle } from 'styled-components';
import { reset } from "./reset";

const styles = css`
html{
    font-size: 10px;
    *{
        font-family: ${({ theme }) => theme.fontFamily};
    }
}
body{
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.colors.default};
}
h1{font-size: ${({ theme }) => theme.font.fontSize.h1};}
h2{font-size: ${({ theme }) => theme.font.fontSize.h2};}
h3{font-size: ${({ theme }) => theme.font.fontSize.h3};}
h4{font-size: ${({ theme }) => theme.font.fontSize.h4};}
h5{font-size: ${({ theme }) => theme.font.fontSize.h5};}
h6{font-size: ${({ theme }) => theme.font.fontSize.h6};}
button{
    font-size: ${({ theme }) => theme.button};
    font-weight: ${({ theme }) => theme.bold};
}`
const GlobalStyles = createGlobalStyle`
${reset}
${styles}
`;

export default GlobalStyles;