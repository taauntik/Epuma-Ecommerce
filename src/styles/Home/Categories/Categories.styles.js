import styled from "styled-components";

export const Categories = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 250px;

`;

export const Category = styled.div`
    background-color: #e0e0e0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    height: 140px;
    font-weight: bold;
    border-radius: 3px;

    img {
        height: 100px;
    }
    .title {
        font-size: 12px;
        text-align: center;
    }

    :hover {
        box-shadow: 3px 7px 7px lightgray;
        height: 150px;
        img {
            height: 110px;
        }
    }
`;