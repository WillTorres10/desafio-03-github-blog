import {HeaderContainer, HeaderContent} from "./styles.ts";
import logo from "../../assets/images/logo.svg";
import effect from "../../assets/images/effect.svg";
import effectRight from "../../assets/images/effect-right.svg";

export function Header(){
    return (
        <HeaderContainer>
            <img src={effect} className="effects" alt=""/>
            <HeaderContent>
                <img src={logo} alt=""/>
            </HeaderContent>
            <img src={effectRight} className="effects" alt=""/>
        </HeaderContainer>
    );
}