import styled from "styled-components"
import { Container } from "../../globalStyles";
import { Link } from "react-scroll";

export const HomePage=styled.div`
width: 100%;
height: auto;
background-color: rgba(0,0,7,0.5);

`;
 export const HomeContainer = styled(Container)`
 display: flex;
 flex-direction: column;
 min-height: calc(100vh - 80px);
 justify-content: space-between;
${Container}
 `;

 export const Text=styled.div`
 padding: 100px 50px;
 @media screen and (max-width:950px){
     padding:50px 0px;
 };

 h1{
     color:white;
     font-size: 2rem;
     max-width:500px;
     margin-bottom: 30px;
     text-transform: uppercase;
     @media screen and (max-width:450px){
     font-size:1.1rem;
 };
 };
h3{
    color: white;
    font-size:1.5rem;
    margin-bottom: 12px;
    @media screen and (max-width:450px){
     font-size:1rem;
 };
};
ul{
    list-style:none ;
}

li{
    padding: 3px;
display: flex;
color: white;
flex-wrap: wrap;
};
nav{
    color: green;
    padding: 0 5px;
}
`;
export const MovedIcon=styled(Link)`

 width: 100%;
 padding: 0px 0px 10px;
 display: flex;
 justify-content: center;
 i{
    color: white; 
    font-size: 2rem;
    background-color: rgba(0,0,0,0.7);
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        color: green;
    }
    @media screen and (max-width:450px){
        width: 35px;
        height: 35px;
     font-size:1rem;
 };
 }
`;