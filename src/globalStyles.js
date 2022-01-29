import styled from "styled-components";



export const Container = styled.div`
width: 100%;
max-width: 1300px;
margin-right: auto;
z-index: 1;
margin-left: auto;
padding-left: 50px;
padding-right: 50px;
@media screen and (max-width:995px){
    padding-left: 10px;
padding-right: 10px;
}
`;

export const Button=styled.button`
border-radius: 15px;
background:rgba(0,0,0,0.5);
white-space: nowrap;
padding: ${({big})=>(big ? '10px 60px' : '3px 12px')};
color: white;
font-size: ${({fontBig})=>(fontBig ? '19px' : '15px')};
outline: none;
cursor: pointer;
border: 1px solid white;


:hover{
    transition: all 0.3 ease-out;
    background: white;
    background: ${({primary})=>(primary ? '#0467fb' : "#4b59f7")};

}
@media screen and (max-width:950px){
    width: 100%;
}

`;