import {ProfileCard, ProfileCardTitle, ProfileIcons, ProfileIconsGroup} from "./style.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faUserGroup, faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export function Profile() {
    return (
        <ProfileCard>
            <img src="https://github.com/WillTorres10.png" className="effects" alt=""/>
            <div>
                <ProfileCardTitle>
                    <h1>Cameron Williamson</h1>
                    <a>GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </ProfileCardTitle>
                <p>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </p>
                <ProfileIconsGroup>
                    <ProfileIcons>
                        <FontAwesomeIcon icon={faGithub} />
                        cameronwll
                    </ProfileIcons>
                    <ProfileIcons>
                        <FontAwesomeIcon icon={faBuilding} />
                        Rocketseat
                    </ProfileIcons>
                    <ProfileIcons>
                        <FontAwesomeIcon icon={faUserGroup} />
                        32 seguidores
                    </ProfileIcons>
                </ProfileIconsGroup>
            </div>
        </ProfileCard>
    )
}