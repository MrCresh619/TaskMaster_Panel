'use client';
import { ThemeProvider } from "styled-components"
import { ApolloWrapper } from "./ApolloWrapper"
import StyledComponentsRegistry from "./registry"
import { theme } from "../styles/theme.styles"

export const AppProvider = ({children}) => {
    return (
    <ApolloWrapper>
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    </ApolloWrapper>)
}