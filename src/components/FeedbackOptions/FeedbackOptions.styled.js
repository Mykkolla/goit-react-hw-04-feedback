import styled from 'styled-components';

export const Button = styled.button`
  padding-left: 10px;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  &:hover,
  &:focus {
    color: #fff;
    cursor: pointer;
`;
