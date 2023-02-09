import styled from "styled-components";
export const LoginRegisterPage = styled.div`
    height:85vh;
    display:flexbox ;
    align-items:center ;
    justify-content:center ;

`;
export const LoginRegisterDiv = styled.div`
        background-color:#FCECDD ;
        height:500px;
        width:500px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        &>h2{
        text-align: center;
    }
`;

export const LoginRegisterForm = styled.form`
    height:400px ;
    width:400px;
    margin:auto ;
    &>button{
        margin-top:50px;
        margin-left:75px;
        width:250px;
    }
    &> a > button{
        margin-top:25px;
        margin-left:100px;
        width:200px;
    }
`;
export const LoginRegisterBox = styled.div`
    position: relative;
    &>input{
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid;
        outline: none;
        background: transparent;
    }
    &>label{
        position: absolute;
        padding: 13px 0;
        top:0;
        left:0;
        font-size: 20px;
        color:rgb(180, 180, 180);
        pointer-events: none;
        transition: .5s;    
    }
    &>input:focus ~ label {
        top: -20px;
        left: 0;
        color:black;
        font-size: 12px;
    }
    &>input:valid ~ label {
        top: -20px;
        left: 0;
        color:black;
        font-size: 15px;
    }
    input:not(:placeholder-shown) ~ label {
        top: -20px;
        left: 0;
        color:black;
        font-size: 15px;
    }
`;