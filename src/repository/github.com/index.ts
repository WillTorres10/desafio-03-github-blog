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
export async function SearchIssueIntoRepository(searchTerm: string) {
    const repoConfig = `repo:${config.githubUser}/${config.repositoryName}`;

    return apiGithub.get<IssuesList>(`/search/issues?q=${searchTerm} ${repoConfig}`);
}

export type IssueItem = Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"]["data"];
export async function GetIssue (issueId: string) {
    return apiGithub.get<IssueItem>(`/repos/${config.githubUser}/${config.repositoryName}/issues/${issueId}`);
}