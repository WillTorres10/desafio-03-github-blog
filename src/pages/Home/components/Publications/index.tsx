import {formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {PublicationCard, PublicationNotFound, PublicationsContainer, PublicationTitle} from "./styles.ts";
import {IssueItems} from "../../../../repository/github.com";
import {NavLink} from "react-router-dom";

interface PublicationProps {
    publications: IssueItems
}

export function Publications({publications}: PublicationProps) {
    if (publications.length === 0) {
        return (
            <PublicationNotFound>
                <h1>Nada Encontrado</h1>
            </PublicationNotFound>
        );
    }

    const formatDate = (date: string) => {
        const dateObj = new Date(date);
        return formatDistanceToNow(dateObj, {
            locale: ptBR,
            addSuffix: true
        });
    }

    return (
        <PublicationsContainer>
            {publications.map(publication => (
                <NavLink to={`/issue/${publication.number}/detail`} key={publication.id}>
                    <PublicationCard>
                        <PublicationTitle>
                            <h1>{publication.title}</h1>
                            <span>{formatDate(publication.created_at)}</span>
                        </PublicationTitle>
                        <p>{publication.body}</p>
                    </PublicationCard>
                </NavLink>
            ))}
        </PublicationsContainer>
    )
}