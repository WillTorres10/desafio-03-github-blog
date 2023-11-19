import styled from "styled-components";
import {Card} from "../../../../components/Card";
import {ProfileIconsGroup} from "../../../Home/components/Profile/style.ts";

export const TitleCard = styled(Card)`
  padding: 2rem;
  
  h1 {
    margin-top: 1.20rem;
  }
`;

export const TitleNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  
  a {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    gap: 0.5rem;
    
    text-decoration: none;
    svg{
      height: 0.75rem;
    }
  }
`

export const TitleIconsGroup = styled(ProfileIconsGroup)`
    margin-top: 0.5rem;
`;