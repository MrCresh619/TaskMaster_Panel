import styled from "styled-components";

export const StyledInput = styled.input`
border: none;
width: 300px;
height: 50px;
border-radius: 15px;
background-color: ${({theme}) => theme.colors.primary};
color: ${({theme}) => theme.colors.white};
padding-inline: ${({theme}) => theme.space[10]};
box-shadow: 0px 0px 2px 1px ${({theme}) => theme.opacity(theme.colors.black, .5)};
`