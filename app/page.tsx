import fs from "fs";
import Link from "next/link";
import "../styles/home/home.css";
import Image from "next/legacy/image";
import Image_part from "./image";

const getPostData = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPost = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPost.map((file) => file.replace(".md", ""));

  return slugs;
};

const Home = () => {
  const postMetaData = getPostData();
  const postPreview = postMetaData.map((slug) => (
    <div>
      <Link href={`/posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));

  const imgPath = "/main-image.png";

  return (
    <div className="container">
      <h1 className="main-title">Learn to understand, not to memorize</h1>
      <div className="main-image-background">
        <Image
          src={imgPath}
          alt="landing page image"
          layout="fill"
          objectFit="contain"
          className="main-image"
          style={{
            position: "relative",
            zIndex: "1",
          }}
        />
      </div>
      <h3>recent entries</h3>

      <div className="images">
        <Image_part
          image="Preservar%20el%20estado%20de%20un%20hook"
          numImage="0"
        ></Image_part>
        <Image_part
          image="Estructuras%20de%20control"
          numImage="1"
        ></Image_part>
        <Image_part
          image="React%20Context"
          numImage="2"
        ></Image_part>
         <Image_part
          image="while%20Loop"
          numImage="3"
        ></Image_part>
      </div>

      {postPreview}
    </div>
  );
};

export default Home;
