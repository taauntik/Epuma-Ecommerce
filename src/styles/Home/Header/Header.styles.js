import styled from "styled-components";

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;

  li > small > a {
    text-decoration: none;
    font-weight: bold;
    color: #cd5c5c;
    transition: 0.2s;
  }

  li > small {
    margin-left: 5px;
  }

  li > small > a:hover {
    color: #cc2121;
  }

  li:first-child {
    margin-right: 20px;
  }

  .info {
    display: flex;
    list-style: none;
  }

  .dropdown {
    display: flex;
    cursor: pointer;
    align-items: center;
  }

  .dropdown > .dropdown-icon {
    width: 10px;
    margin-left: 4px;
    transition: 0.2s;
  }

  .dropdown-up {
    transform: rotate(180deg);
  }
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;

  .logo {
    cursor: pointer;
    margin-right: 30px;
    img {
      width: 100%;
    }
  }

  .search {
    display: flex;
    align-items: center;
    flex-grow: 1;
    position: relative;
    input {
      font-size: 16px;
      outline-width: 0;
      padding: 16px;
      width: 100%;
      border: 1px solid #e0e0e0;
      border-radius: 3px;
      padding-right: 43px;
    }
    input:focus {
      border-color: #cd5c5c;
    }
    #search-icon {
      position: absolute;
      width: 30px;
      right: 16px;
    }
  }

  .navigators {
    display: flex;

    ul {
      display: flex;
      list-style: none;
      text-decoration: none;
      align-items: center;
      li > .link {
        text-decoration: none;
        color: black;
        transition: 0.1s;
        font-size: 20px;
      }
      li > .link:hover {
        color: #cd5c5c;
      }
      li {
        margin-left: 40px;
      }
      li > .link img {
        width: 20px;
      }

      .cart > span {
        background-color: #cd5c6b;
        padding: 3px 5px;
        color: white;
        font-weight: bold;
        font-size: 12px;
        border-radius: 999px;
        position: absolute;
        transform: translate(-6px,-6px);
      }
      .cart > .icon {
        position: relative;
      }
    }
  }
`;

export const Header = styled.div`
  padding-top: 10px;
  border-bottom: 1px solid lightgray;
`;
