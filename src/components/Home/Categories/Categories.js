import React from "react";

// internal imports
import { ComponentWrapper } from "../../../components/common/ComponentWrapper";
import { Categories as Container } from "../../../styles/Home/Categories/Categories.styles";
import Category from "./Category";

// TODO: switch to another file
const products = [
  {
    id: 1,
    image:
      "https://tech-demo.scandipwa.com/media/wysiwyg/Webp.net-resizeimage_2_.png",
    title: "SMARTPHONES & GADGETS",
  },
  {
    id: 2,
    image:
      "https://tech-demo.scandipwa.com/media/wysiwyg/Webp.net-resizeimage_4_.png",
    title: "LAPTOPS AND COMPUTERS",
  },
  {
    id: 3,
    image:
      "https://tech-demo.scandipwa.com/media/wysiwyg/Webp.net-resizeimage_7_.png",
    title: "GAMING AND CONSOLES",
  },
  {
    id: 4,
    image:
      "https://tech-demo.scandipwa.com/media/wysiwyg/Webp.net-resizeimage.png",
    title: "TV & AUDIO",
  },
  {
    id: 5,
    image:
      "https://tech-demo.scandipwa.com/media/wysiwyg/Webp.net-resizeimage_5_.png",
    title: "CAMERA EQUIPMENT",
  },
  {
    id: 6,
    image:
      "https://tech-demo.scandipwa.com/media/wysiwyg/Webp.net-resizeimage_6_.png",
    title: "HOUSEHOLD APPLIANCES",
  },
  {
    id: 7,
    image:
      "https://tech-demo.scandipwa.com/media/wysiwyg/Webp.net-resizeimage_1_.png",
    title: "KITCHEN APPLIANCES",
  },
];

function Categories() {
  return (
    <ComponentWrapper>
      <Container>
        {products.map((pd) => (
          <Category key={pd.id} pd={pd} />
        ))}
      </Container>
    </ComponentWrapper>
  );
}

export default Categories;
