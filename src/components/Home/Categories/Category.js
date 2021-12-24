import React from "react";

// internal imports
import { Category as Container } from "../../../styles/Home/Categories/Categories.styles";

function Category({ pd }) {
    const { image, title } = pd;
    return (
        <Container>
            <img src={image} alt="" />
            <p className="title">{title}</p>
        </Container>
    )
}

export default Category;