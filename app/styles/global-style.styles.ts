'use client';
import { css, createGlobalStyle } from 'styled-components';
import { reset } from "./reset";

const styles = css`
html{
    font-size: 10px;
    *{
        font-family: ${({ theme }) => theme.font.fontFamily.fontFamily[0]};
    }
}
body{
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.fontSize.default};
}
h1{
    font-weight: ${({ theme }) => theme.font.fontWeight.bold};
    font-size: ${({ theme }) => theme.font.fontSize.h1};
}
h2{
    font-weight: ${({ theme }) => theme.font.fontWeight.bold};
    font-size: ${({ theme }) => theme.font.fontSize.h2};
}
h3{
    font-weight: ${({ theme }) => theme.font.fontWeight.bold};
    font-size: ${({ theme }) => theme.font.fontSize.h3};
}
h4{
    font-weight: ${({ theme }) => theme.font.fontWeight.bold};
    font-size: ${({ theme }) => theme.font.fontSize.h4};
}
h5{
    font-weight: ${({ theme }) => theme.font.fontWeight.bold};
    font-size: ${({ theme }) => theme.font.fontSize.h5};
}
h6{
    font-weight: ${({ theme }) => theme.font.fontWeight.bold};
    font-size: ${({ theme }) => theme.font.fontSize.h6};
}
button{
    font-size: ${({ theme }) => theme.font.fontSize.button};
    font-weight: ${({ theme }) => theme.font.fontWeight.bold};
}`
const GlobalStyles = createGlobalStyle`
${reset}
${styles}
`;

export default GlobalStyles;