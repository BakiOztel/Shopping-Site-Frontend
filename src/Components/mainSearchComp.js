import styled from "styled-components";

export const Search = styled.form`
  position: relative; 
  width: 100%;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  background: #fff;
  transition: all 0.3s ease;
  & >input{
    position: absolute;
    top: 10px;
    left: 5%;
    font-size: 14px;
    background: none;
    color: #5a6674;
    width: 95%;
    height: 20px;
    border: none;
    appearance: none;
    outline: none;
  }

`;
export const SearchButton = styled.div`
    position: absolute;
    top: 10px;
    left: 15px;
    height: 20px;
    width: 20px;
    padding: 0;
    margin: 0;
    border: none;
    background: none;
    outline: none!important;
    cursor: pointer;
`;