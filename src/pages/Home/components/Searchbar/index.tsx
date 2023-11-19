import {SearchBarContainer, SearchBarTitle} from "./styles.ts";

export function Searchbar() {
    return (
        <SearchBarContainer>
            <SearchBarTitle>
                <h2>Publicações</h2>
                <span>6 Publicações</span>
            </SearchBarTitle>
            <input type="text" placeholder="Buscar Conteúdo" />
        </SearchBarContainer>
    )
}