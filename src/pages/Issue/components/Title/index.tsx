import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faArrowUpRightFromSquare, faCalendar, faComment} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {TitleCard, TitleIconsGroup, TitleNav} from "./styles.ts";
import {ProfileIcons} from "../../../Home/components/Profile/style.ts";
import {NavLink} from "react-router-dom";

export function Title() {
    return (
        <TitleCard>
            <TitleNav>
                <NavLink to="/"><FontAwesomeIcon icon={faChevronLeft}/> Voltar</NavLink>
                <a>Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
            </TitleNav>
            <h1>JavaScript data types and data structures</h1>
            <TitleIconsGroup>
                <ProfileIcons>
                    <FontAwesomeIcon icon={faGithub} />
                    cameronwll
                </ProfileIcons>
                <ProfileIcons>
                    <FontAwesomeIcon icon={faCalendar} />
                    Há 1 dia
                </ProfileIcons>
                <ProfileIcons>
                    <FontAwesomeIcon icon={faComment} />
                    5 comentários
                </ProfileIcons>
            </TitleIconsGroup>
        </TitleCard>
    );
}