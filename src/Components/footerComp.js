import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterNav = styled.ul`
    
    list-style-type:none ;
    padding:0px;
`;
export const FooterItems = styled.li`
        padding-left:15px ;
        margin-bottom:8px;
`;

export const FooterLink = styled(Link)`
        text-decoration:none;
        color:white ;
`;

export const FooterImg = styled.img`
        max-width:100%;
        max-height:100%;
        object-fit: cover;
        object-position: center;
`;