import styled from "styled-components";

export const CardStar = styled.div`
    display:flexbox ;
    font-size:${props => props.fontSize || "12px"};
    & > span {
        margin-left:5px ;
    }
`;
export const CardStarRate = styled.span`
    display:block;
    margin-left:10px;
`;

export const ProductLeftSlideDiv = styled.div`
    display:flexbox;
    font-size:12px !important ;
    &>span{
        margin-left:2px;
    }
`;

