import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faArrowUpRightFromSquare, faCalendar, faComment} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {TitleCard, TitleIconsGroup, TitleNav} from "./styles.ts";
import {ProfileIcons} from "../../../Home/components/Profile/style.ts";
import {NavLink} from "react-router-dom";
import {IssueItem} from "../../../../repository/github.com";
import {formatDistanceToNow} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface TitleProps {
    issue: IssueItem
}

export function Title({issue}: TitleProps) {

    const time = formatDistanceToNow(new Date(issue.created_at), {
        locale: ptBR,
        addSuffix: true
    });

    const commentText = issue.comments == 1 ? 'Comentário' : 'Comentários';

    return (
        <TitleCard>
            <TitleNav>
                <NavLink to="/"><FontAwesomeIcon icon={faChevronLeft}/> Voltar</NavLink>
                <a href={issue.html_url} target="_blank">Ver no Github <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a>
            </TitleNav>
            <h1>{issue.title}</h1>
            <TitleIconsGroup>
                <ProfileIcons>
                    <FontAwesomeIcon icon={faGithub} />
                    {issue.user?.login}
                </ProfileIcons>
                <ProfileIcons>
                    <FontAwesomeIcon icon={faCalendar} />
                    {time}
                </ProfileIcons>
                <ProfileIcons>
                    <FontAwesomeIcon icon={faComment} />
                    {issue.comments} {commentText}
                </ProfileIcons>
            </TitleIconsGroup>
        </TitleCard>
    );
}