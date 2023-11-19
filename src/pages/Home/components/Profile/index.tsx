import {ProfileCard, ProfileCardTitle, ProfileIcons, ProfileIconsGroup} from "./style.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding, faUserGroup, faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {requestUserProfile, UserProfileResponseType} from "../../../../repository/github.com";
import {useEffect, useState} from "react";

export function Profile() {

    const [userProfileData, setUserProfileData] = useState<UserProfileResponseType>({} as UserProfileResponseType);

    useEffect(() => {
        requestUserProfile().then(({data}) => setUserProfileData(data));
    }, []);

    return (
        <ProfileCard>
            <img src={userProfileData.avatar_url} className="effects" alt=""/>
            <div>
                <ProfileCardTitle>
                    <h1>{userProfileData.name}</h1>
                    <a href={userProfileData.html_url} target="_blank">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </ProfileCardTitle>
                <p>
                    {userProfileData.bio}
                </p>
                <ProfileIconsGroup>
                    <ProfileIcons>
                        <FontAwesomeIcon icon={faGithub} />
                        {userProfileData.login}
                    </ProfileIcons>
                    <ProfileIcons>
                        <FontAwesomeIcon icon={faBuilding} />
                        {userProfileData.company ?? 'Não Informado'}
                    </ProfileIcons>
                    <ProfileIcons>
                        <FontAwesomeIcon icon={faUserGroup} />
                        {userProfileData.followers} seguidores
                    </ProfileIcons>
                </ProfileIconsGroup>
            </div>
        </ProfileCard>
    )
}