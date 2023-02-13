import fs from 'fs';
import Link from 'next/link'

const getPostData = () => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder);
  const markdownPost = files.filter((file) => file.endsWith('.md'))
  const slugs = markdownPost.map((file) => file.replace(".md", ''))
  
  return slugs
} 

const Home = () => {
  const postMetaData = getPostData();
  const postPreview = postMetaData.map( slug => (
    <div>
      <Link href={`/posts/${slug}`}>
        <h2>{slug}</h2>        
      </Link>
    </div>
  ));

  return (
    <div>
      <h1>Este es el home</h1>
      {postPreview}
    </div>
  );
}

export default Home;