import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;

  background: ${props => props.theme['base-profile']};
  
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;

  box-shadow: -20px -140px 90px -70px rgba(50,148,248,0.1) inset;
  
  .effects {
    margin-top: -4rem;
    width: 31.5rem;
  }
`

export const HeaderContent = styled.div`
  width: 54rem;
  height: 6.125rem;
  
  display: flex;
  justify-content: center;
`