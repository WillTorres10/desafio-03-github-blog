import {Header} from "../../components/Header";
import {Container} from "../../components/ContentContainer";
import {Profile} from "./components/Profile";
import {Searchbar} from "./components/Searchbar";
import {Publications} from "./components/Publications";
import {useEffect, useState} from "react";
import {IssueItems, SearchIssueIntoRepository} from "../../repository/github.com";

export function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [publications, setPublications] = useState([] as IssueItems);

    useEffect(() => {
        SearchIssueIntoRepository(searchQuery).then(function ({data}) {
            setPublications(data.items);
        })
    }, [searchQuery])

    return (
        <>
            <Header />
            <Container>
                <Profile />
                <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} totalPublications={publications.length}/>
                <Publications publications={publications} />
            </Container>
        </>
    )
}