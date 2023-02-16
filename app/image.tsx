import React from "react";
import Image from "next/image";

const Image_part = (props: any) => {
  const images = [
    "/Rectangle1.png",
    "/Rectangle2.png",
    "/Rectangle3.png",
    "/Rectangle4.png",
  ];

  return (
    <div className="image">
      <a href={`/posts/${props.image}`}>
        <Image 
            src={images[props.numImage]} 
            alt="image1" 
             width={350} 
             height={300} 
            />
      </a>
    </div>
  );
};

export default Image_part;