
import { css } from "styled-components";
import styled from 'styled-components';

const StyledLink = styled.a`
  text-decoration:none;
  font-size:3rem;
  color:red;

  &:hover{
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color:greenyellow;
  }

  //react props varsa css işlemini uygula
  ${({react}) => react && css`
  background-color:black;
  color:#bebe;
  `}
`;

export default StyledLink;
