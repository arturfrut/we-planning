import styled from "styled-components";

export const AdminPanelContainer = styled.div`
display: flex;
flex-direction: column;
background-color: yellow;
width: 100%;
`;

export const WideButton = styled.div`
cursor: pointer;
padding: 1rem;
box-sizing: border-box;
text-align: center;
width: 100%;
background-color: darkblue;
color: white;
&:hover{
    background-color:green;
}
`;

export const NormalButton = styled.button`
cursor:pointer;
padding: 1rem;
display: inline-block;
text-align: center;
align-self: center;
width: 90%;
background-color: darkblue;
color: white;
&:hover{
    background:red;
}
`;