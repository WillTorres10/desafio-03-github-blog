import {ContentContainer} from "./styles.ts";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import {IssueItem} from "../../../../repository/github.com";

interface ContentProps {
    issue: IssueItem
}
export function Content({issue}: ContentProps) {
    return (
        <ContentContainer>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {issue.body}
            </ReactMarkdown>
        </ContentContainer>
    );
}