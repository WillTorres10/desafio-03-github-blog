import {Header} from "../../components/Header";
import {Container} from "../../components/ContentContainer";
import {Profile} from "./components/Profile";
import {Searchbar} from "./components/Searchbar";

export function Home() {
    return (
        <>
            <Header />
            <Container>
                <Profile />
                <Searchbar />
            </Container>
        </>
    )
}