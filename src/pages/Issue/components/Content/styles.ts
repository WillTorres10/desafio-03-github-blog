import styled from "styled-components";

export const ContentContainer = styled.main`
  margin: 2.5rem;
  padding-bottom: 2.5rem;

  color: ${props => props.theme['base-text']};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */

  p {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;


    a {

      &:hover {
        text-decoration: none;
        border-bottom: none;
      }
    }
    
    img {
      height: auto;
      max-width: 100%;
    }
  }
`