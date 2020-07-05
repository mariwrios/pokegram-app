import React from "react";
import { Anchor, Image } from "../Category/styles";

const DEFAULT_IMAGE =
  "https://cdn.pixabay.com/photo/2020/01/16/17/32/pokemon-4771238_960_720.jpg";

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => (
  <Anchor href="{path}">
    <Image src={cover} />
    {emoji}
  </Anchor>
);
