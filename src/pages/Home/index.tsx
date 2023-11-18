import {Header} from "../../components/Header";
import {Container} from "../../components/ContentContainer";
import {Profile} from "./components/Profile";

export function Home() {
    return (
        <>
            <Header />
            <Container>
                <Profile />
            </Container>
        </>
    )
}