import styled from 'styled-components';

const Button = styled.button`
  height: fit-content;
  border-radius: 0.5rem;
  background: ${({ secondary, theme }) => (!secondary ? theme.primary : theme.secondary)};
  color: ${({ secondary, theme }) => (!secondary ? theme.secondary : theme.auxiliar)};
  padding: 1.2rem 2.4rem;
  border: ${({ secondary, theme }) => (!secondary ? 'none' : theme.borderButton)};
  font-weight: bolder;
  text-transform: uppercase;
`;

export default Button;
