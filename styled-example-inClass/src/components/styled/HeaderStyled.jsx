import styled from 'styled-components';

const HeaderStyled = styled.header`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:1.5rem;
  
  @media (max-width:700px) {
    flex-direction:column;
  }

  //headerStyled içindeki dive flex uygular
  & div{
    flex:2;
    }
&  img{
    flex:1;
    }
`;

export default HeaderStyled;
