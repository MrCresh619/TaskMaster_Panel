import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    font-size: 10px;
    *{
        font-family: ${({theme}) => theme.font.fontFamily.fontFamily};
    }
}
body{
    background-color: ${({theme}) => theme.colors.accent};
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${({theme}) => theme.font.fontSize.default};
}
h1{font-size: ${({theme}) => theme.font.fontSize.h1};}
h2{font-size: ${({theme}) => theme.font.fontSize.h2};}
h3{font-size: ${({theme}) => theme.font.fontSize.h3};}
h4{font-size: ${({theme}) => theme.font.fontSize.h4};}
h5{font-size: ${({theme}) => theme.font.fontSize.h5};}
h6{font-size: ${({theme}) => theme.font.fontSize.h6};}
button{
    font-size: ${({theme}) => theme.font.fontSize.button};
    font-weight: ${({theme}) => theme.font.fontWeight.bold};
}
`