import styled from "styled-components";
import {Card} from "../../../../components/Card";

export const ProfileCard = styled(Card)`
  padding: 2.5rem;
  
  display: flex;
  flex-direction: row;
  gap: 2rem;
  
  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
  
  p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

export const ProfileCardTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const ProfileIconsGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 1.5rem;
  
`;

export const ProfileIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${({ theme }) => theme['base-label']};
  }
  
  font-size: 1rem;
  color: ${({theme}) => theme['base-subtitle']};
`;