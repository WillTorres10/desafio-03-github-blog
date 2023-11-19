import {Header} from "../../components/Header";
import {Container} from "../../components/ContentContainer";
import {Profile} from "./components/Profile";
import {Searchbar} from "./components/Searchbar";
import {Publications} from "./components/Publications";

export function Home() {
    return (
        <>
            <Header />
            <Container>
                <Profile />
                <Searchbar />
                <Publications />
            </Container>
        </>
    )
}