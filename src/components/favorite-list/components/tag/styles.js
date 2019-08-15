import styled from "styled-components";

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const ButtonDelete = styled.div`
  background-color: #1f68c1;
  padding: 3px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 60px;
  margin-right: 5px;
  margin-bottom: 5px;

  p {
    display: flex;
    color: #fff;
    font-size: 10px;
    text-align: center;
    align-items: center;
    padding-right: 5px;
  }

  button {
    border: none;
    background-color: transparent;
    padding: 2px;
    display: flex;
    align-items: center;

    img {
      margin-left: 7px;
      cursor: pointer;
      width: 8px;
    }
  }
`;
