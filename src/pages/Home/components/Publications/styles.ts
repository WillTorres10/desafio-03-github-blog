import styled from "styled-components";
import {Card} from "../../../../components/Card";

export const PublicationsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding-bottom: 2rem;
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme['base-title']};
    &:hover, &:focus {
      text-decoration: none;
      border-bottom-color: transparent;
    }
  }
`;

export const PublicationCard = styled(Card)`
  padding: 2rem;
  border: 2px solid ${props => props.theme['base-profile']};
  transition: all 0.2s ease-in-out;
  
  &:hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme['base-border']};
  }
  
  p {
    color: ${({ theme }) => theme['base-text']};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6rem; /* 25.6px */

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
export const PublicationNotFound = styled(Card)`
  margin-top: 3rem;
  padding: 2rem;
  border: 2px solid ${props => props.theme['base-profile']};
  transition: all 0.2s ease-in-out;
  text-align: center;
`;

export const PublicationTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
  
  h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  
  span {
    white-space: nowrap;
    text-transform: capitalize;
    
    color: ${({ theme }) => theme['base-span']};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
`;