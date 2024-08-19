import { styled } from 'styled-components';
export const StyledButton = styled.button<{
 variant?: 'primary' | 'secondary' | 'accent';
}>`
 background-color: ${(props) =>
  props.variant === 'primary' ? '#00ff00' : 'pink'};
`;
