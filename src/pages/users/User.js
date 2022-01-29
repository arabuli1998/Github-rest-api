import React,{useEffect,useState} from 'react';
import { UsersContainer,Card,Containers,Text,Buttons,Icons} from './User.elements';
import { FaGripHorizontal,FaGripVertical } from 'react-icons/fa';



const User = () => {
    // ********************** states ************************//

    const [users, setUsers] = useState([]);
    const [size, setSize] = useState("280px");

// ********************** fetch data ************************//
useEffect(()=>{
        fetch("https://api.github.com/users")
   .then((res) => {
    if (!res.ok) {
      throw new Error(
        `This is an HTTP error: The status is ${res.status}`
      );
    }
    return res.json();
  })
   .then((data) => setUsers(data))
   .catch((err) => {
    console.log(err.message);
   })
   .finally(() => {
    
  });
},[]);

  // ************************* change size of cards *************************//
   function ChangeVertical(){
      setSize('350px')
     
   };
   function ChangeHorisontal(){
    setSize('280px')
   
 }
 useEffect(()=>{
  ChangeVertical();
  ChangeHorisontal()
},[]);



  return (
    <UsersContainer id="user">
        <Containers>
          <Icons>
            <i><FaGripHorizontal onClick={ChangeHorisontal}/></i>
            <i> <FaGripVertical onClick={ChangeVertical} /></i>
          </Icons>
     {
         users.map((eachUser) => {
             return (

                 <Card key={eachUser.id} style={{maxWidth:`${size}`}}>
                    
                         <a href={`${eachUser.html_url}`}>
                             <img  src={eachUser.avatar_url} alt=""/>
                         </a>

                         <div>
                         <h3>{eachUser.login}</h3>
                           <Text>
                             <h4>Type: <nav>{eachUser.type}</nav></h4>
                             <h4>Id: <nav>{eachUser.id}</nav></h4>
                             </Text>
                         <Buttons>see more</Buttons>
                         
                     </div>
                 </Card>
             )
         })
     }

</Containers>
                      
 </UsersContainer>   
  )
};

export default User;
