import {PublicationCard, PublicationNotFound, PublicationsContainer, PublicationTitle} from "./styles.ts";
import {IssueItems} from "../../../../repository/github.com";

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
    return (
        <PublicationsContainer>
            {publications.map(publication => (
                <PublicationCard>
                    <PublicationTitle>
                        <h1>{publication.title}</h1>
                        <span>
                        Há 1 dia
                    </span>
                    </PublicationTitle>
                    <p>
                        {publication.body}
                    </p>
                </PublicationCard>
            ))}
        </PublicationsContainer>
    )
}