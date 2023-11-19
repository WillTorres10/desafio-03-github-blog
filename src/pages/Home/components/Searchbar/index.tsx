import {SearchBarContainer, SearchBarTitle} from "./styles.ts";
import {ChangeEvent} from "react";

interface SearchbarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    totalPublications: number;
}
export function Searchbar({searchQuery, setSearchQuery, totalPublications} : SearchbarProps) {

    function handleSearchQuery(e: ChangeEvent<HTMLInputElement>) {
        setSearchQuery(e.target.value)
    }

    const publicationsText = totalPublications === 1 ? "Publicação" : "Publicações";

    return (
        <SearchBarContainer>
            <SearchBarTitle>
                <h2>Publicações</h2>
                <span>{totalPublications} {publicationsText}</span>
            </SearchBarTitle>
            <input type="text" value={searchQuery} onChange={handleSearchQuery} placeholder="Buscar Conteúdo" />
        </SearchBarContainer>
    )
}