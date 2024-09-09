import { css } from 'styled-components';

export interface ColorsInterface{
    white: string,
    background: string,
    primary: string,
    secondary: string,
    accent: string,
    black: string
}

export const colors: ColorsInterface = {
    white: 'rgba(255, 255, 255, 1)',
    background: "rgba(0, 60, 67, 1)",
    primary: 'rgba(19, 93, 102, 1)',
    secondary: "rgba(227, 254, 247, 1)",
    accent: "rgba(119, 176, 170, 1)",
    black: 'rgba(0, 0, 0, 1)'
}

export const opacityColor = (color: string, opacity: number) => {
    const colorParts = color.split(',')
    const lastIndex = colorParts.length - 1
    colorParts[lastIndex]= colorParts[lastIndex]?.replace('1', `${opacity}`)
    return colorParts.join(',')
}

export const contrastContainer = () => {
    return css`
    background-color: red;
    color: wheat;
    `;
}