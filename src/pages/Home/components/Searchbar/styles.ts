import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  margin-top: 4.5rem;
  
  input {
    width: 100%;
    background-color: ${props => props.theme['base-input']};
    border-radius: 6px;
    border: 1px solid ${props => props.theme['base-border']};
    padding: 0.75rem 1rem;
    color: ${props => props.theme['base-text']};
    
    margin-top: 0.75rem;
    
    transition: border-color 0.2s ease-in-out;
    
    &::placeholder {
      color: ${props => props.theme['base-label']};
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 25.6px */
    }
    
    &:focus {
      outline: none;
      border: 1px solid ${props => props.theme['blue']};
    }
  }
`;

export const SearchBarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2 {
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 28.8px */
  }
  
  span {
    color: ${props => props.theme['base-span']};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
`;