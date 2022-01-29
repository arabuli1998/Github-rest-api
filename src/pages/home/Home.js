import React from 'react';
import { HomePage,MovedIcon,HomeContainer,Text } from './Home.Elements';
import {FaSortAmountDown} from 'react-icons/fa'




const Home = () => {
  return <HomePage id="home">
    <HomeContainer>
<Text>
  <h1>Stay creative with your marketing campaigns & content</h1>
  <h3> 6 Ways to Stay Creative Under Pressure</h3>
  <ul>
    <li>Pretend you're working on behalf of someone else</li>
    <li>Just start outlining. ...</li>
    <li>Work when you feel most <nav>creative.</nav> ...</li>
    <li>When you're <nav>absolutely stuck</nav>, walk away from your computer. ...</li>
    <li>Get <nav>eight</nav> hours of sleep. ...</li>
    <li>Record your <nav>creative ideas </nav> when they hit you, then review them later.</li>
  </ul>

</Text>
<MovedIcon  to="page" smooth={true} duration={1000}>
  <i>
  <FaSortAmountDown />
  </i>
  </MovedIcon>

    </HomeContainer>
  </HomePage>
};

export default Home;
