import {Header} from "../../components/Header";
import {Container} from "../../components/ContentContainer";
import {Title} from "./components/Title";
import {Content} from "./components/Content";
import {GetIssue, IssueItem} from "../../repository/github.com";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


export function  Issue(){
    const params = useParams();
    const [issue, setIssue] = useState<IssueItem>({} as IssueItem);
    useEffect(() => {
        if (params.issueId) {
            GetIssue(params.issueId).then(({data}) => {
                setIssue(data);
            })
        }
    }, [params]);

    if (!issue.url) {
        return (
            <Container>
                <Header/>
                <h1>Carregando</h1>
            </Container>
        )
    }
    return (
        <>
            <Header />
            <Container>
                <Title issue={issue} />
                <Content issue={issue} />
            </Container>
        </>
    )
}