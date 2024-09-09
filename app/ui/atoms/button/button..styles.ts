import { styled } from 'styled-components';
export const StyledButton = styled.button`
 background-color: ${({ theme }) => theme.colors.secondary};
 border: none;
 min-width: 100px;
 max-height: 35px;
 border-radius: 15px;
`;
