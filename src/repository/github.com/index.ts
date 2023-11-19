import {apiGithub} from "../../lib/axios.ts";
import config from "../../config.ts";
import {Endpoints} from "@octokit/types"

export type UserProfileResponseType = Endpoints["GET /users/{username}"]["response"]["data"]
export async function requestUserProfile() {
    const username = config.githubUser;
    return apiGithub.get<UserProfileResponseType>(`/users/${username}`);

}