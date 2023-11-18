import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  
  border-radius: 10px;
  background: ${({ theme }) => theme['base-profile']};
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.20);
  
  h1 {
    color: ${({ theme }) => theme['base-title']};
    
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 31.2px */
  }
  
  
`
