import styled from "styled-components";
import {Button } from "../../globalStyles";

//***************main container ********************//

export const UsersContainer=styled.div`
background-color: white;
padding: 30px 50px;
display: flex;
justify-content:center;
@media screen and (max-width:950px){
    padding: 10px 5px;
}
`;
//***************second container ********************//
export const Containers=styled.div`
display:flex;
justify-content: space-evenly;
box-shadow: 0 0 2px black;
padding: 10px 10px;
padding-bottom: 20px;
flex-wrap:wrap;
@media screen and (max-width:800px){
    padding: 3px 3px;
}
`;


//*************** Card ********************//
export const Card =styled.div`
margin-top: 50px;
box-shadow: 0px 0px 5px gray;

width: 100%;
padding: 15px 20px;
display: flex;
flex-direction: column;
justify-content: center;

cursor: pointer;
@media screen and (max-width:950px){
    padding: 5px 10px;
}


:hover{
    box-shadow: 0 0 15px green;
    padding: 5px 10px;
    border-radius: 10px;
}
//***************image link and container ********************//
a{
    width: 100%;
    display: flex;
    justify-content: center;
}
//*************** image ********************//
img{
    width: 80%;
    height: auto;
    background-size: cover;
    border-radius: 50%;
    cursor: pointer;
:hover{
    box-shadow: 0 0 10px black;
}
}
//***************texts container ********************//
div{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 10px 0;
}
//***************user login ********************//
h3{
    display: flex;
    justify-content: center;
    font-weight:bold;
    text-transform: uppercase;
   
}
`;
//***************about user********************//
export const Text=styled.div`
display: flex;

h4{
    display: flex;
    padding: 5px;
    nav{
        color: green;
        padding: 0 10px;
    }
}
`;

export const Buttons=styled(Button)`
${Button}
`;




export const Icons=styled.div`
width:100%;
padding:25px 15px;
display:flex;
justify-content: space-around;
border-bottom: 1px solid gray;

i{
    font-size:1.5rem;
    cursor:pointer;
}
@media screen and (max-width:800px){
    display:none;
}
`;