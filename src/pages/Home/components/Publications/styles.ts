import styled from "styled-components";
import {Card} from "../../../../components/Card";

export const PublicationsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding-bottom: 2rem;
`;

export const PublicationCard = styled(Card)`
  padding: 2rem;
  border: 2px solid ${props => props.theme['base-profile']};
  transition: all 0.2s ease-in-out;
  
  &:hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme['base-border']};
  }
`

export const PublicationTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
  
  span {
    white-space: nowrap;
    
    color: ${({ theme }) => theme['base-span']};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
  }
`;