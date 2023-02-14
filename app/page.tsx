import fs from 'fs';
import Link from 'next/link'
import '../styles/home/home.css';
import Image from 'next/legacy/image';

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
  
  const imgPath = '/main-image.png'

  return (
    <div >
      <h1 className='main-title'>Learn to understand, not to memorize</h1>
      <div className="main-image-background">
        <Image
          src={imgPath}
          alt="landing page image"
          layout='fill'
          objectFit='contain'
          className='main-image'

          style={{
            position: 'relative',
            zIndex: '1'
          }
          }
        />
      </div>
      {postPreview}
    </div>
  );
}

export default Home;