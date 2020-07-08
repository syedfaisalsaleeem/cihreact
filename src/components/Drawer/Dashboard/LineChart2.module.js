import styled from "styled-components";

export const Legend = styled.div`
  position: absolute;
  
  li span {
    width: 36px;
    height: 12px;
    display: inline-block;
    margin: 0 5px 8px 0;
    vertical-align: -9.4px;
  }
  ul {
    list-style: none;
    font: 12px Verdana;
    white-space: nowrap;
  }
  li {
    cursor: pointer;
    text-align: left;
  }
`;

export const PieContainer = styled.div`
  display: flex;
  flex-direction:row;
  
  

`;
