import fs from 'fs';
import Markdown from 'markdown-to-jsx';

const getContent = (slug: string) => {
    const folder = "posts/"
    const file = `${folder}/${slug}.md`
    const content = fs.readFileSync(file, "utf8");

    return content;
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const slugName = slug.replaceAll("%20"," ");
    const content = getContent(slugName);

    return(
        <div>
            <Markdown>{content}</Markdown>
        </div>
    )
}

export default PostPage