import React from 'react';
import footer from './footer.css'
import { FaFacebook,FaInstagram,FaGithub,FaEnvelope} from 'react-icons/fa';


const Footer = () => {
  return <div className='bottombar' id="page">
  <div className='bottombar-col1'>
      
      <ul>
          <li>Stay on track with the app's daily planner. 
              For some extra motivation, see how you compare 
              against the rest of the Train Effective community.
               </li>

          <li>Choose from <span>150+ </span>exercises that will take you from 
              beginner to pro even if you've never scored a goal before.
              </li>

          <li>Work with your own Player Success Agent to build your personal 
              training plan for your career.
               </li>
      </ul>
  
  </div>
  <div className='bottombar-col2'>
      <ul>
          <li>
          <a href="https://www.facebook.com/giorgi.arabuli.1998"><FaFacebook/></a>
          <a href="https://github.com/giorgiarabuli/Train-effective"><FaGithub/></a>
          <a href="#"><FaInstagram/></a>
          <a href="#"><FaEnvelope/></a>
          </li>
          <li><p>
              Whatever the level of skills you have, 
              we'll work with you 1-on-1 through comprehensive 
              programs and your personal success plan until you're 
              ready to be seen by our network of scouts.
              </p></li>
              <li></li>
      </ul>
  </div>
</div>;
};

export default Footer;
