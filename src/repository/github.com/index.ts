import {apiGithub} from "../../lib/axios.ts";
import config from "../../config.ts";
import {Endpoints} from "@octokit/types"

export type UserProfileResponseType = Endpoints["GET /users/{username}"]["response"]["data"]
export async function requestUserProfile() {
    const username = config.githubUser;
    return apiGithub.get<UserProfileResponseType>(`/users/${username}`);
}

export type IssuesList = Endpoints["GET /search/issues"]["response"]["data"];
export type IssueItems = IssuesList["items"];
export async function SearchInssueIntoRepository(searchTerm: string) {
    const repoConfig = `repo:${config.githubUser}/${config.repositoryName}`;

    return apiGithub.get<IssuesList>(`/search/issues?q=${searchTerm} ${repoConfig}`);
}