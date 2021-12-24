import styled from "styled-components";

export const Banner = styled.div`

  .banner-info {
    position: absolute;
    margin-left: 40px;
    margin-top: 75px;

    .title {
      font-weight: 500;
      font-size: 38px;
    }

    .subtitle {
      font-weight: 500;
      font-size: 30px;
      margin-bottom: 30px;
    }

    .description {
      font-weight: 500;
      font-size: 20px;
    }

    .explore-btn {
      background-color: IndianRed;
      border: 2.5px solid IndianRed;
      padding: 15px 20px;
      font-size: 13px;
      font-weight: 500;
      /* letter-spacing: 2px; */
      border-radius: 3px;
      color: white;
      text-transform: uppercase;
      margin-top: 20px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background-color: white;
        color: IndianRed;
        border-color: #cc2121;
      }
    }
  }

  .banner-image {
    position: relative;
    z-index: -1;
    width: 100%;
    height: 400px;
    object-fit: cover;
    left: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
`;
