import styled from 'styled-components';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';

import Home from './pages/home/Home';
import MyPage from './pages/myPage/MyPage';
import User from './pages/users/User';




const Div=styled.div`
padding: 0;
margin: 0;
box-sizing:border-box;
width: 100%;
min-height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-image: url('https://c0.wallpaperflare.com/preview/959/812/937/blogger-business-coffee-computer.jpg');
background-attachment: fixed;

`;

function App() {
  return (
    <Div>
      
      <Navbar/>
      
      <Home/>
      <User />
      <MyPage/>
      <Footer/>
       </Div>
  );
}

export default App;
