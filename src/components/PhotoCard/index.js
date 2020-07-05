import React, { useEffect, useRef } from "react";
import { ImgWrapper, Button, Img } from "./style";
import { MdFavoriteBorder } from "react-icons/md";

const DEFAULT_IMAGE =
  "https://nicksheridan.com/wp-content/uploads/2016/11/z6Ivwy.jpg";

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <article ref={ref}>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} />
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size="32px" /> {likes} likes!
      </Button>
    </article>
  );
};
