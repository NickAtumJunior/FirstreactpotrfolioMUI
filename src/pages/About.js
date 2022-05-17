import React from 'react';
import one from './tech stack/angular.png';
import two from "./tech stack/api.png";
import three from "./tech stack/bootstarp.png";
import four from "./tech stack/css.png";
import five from "./tech stack/html.png";
import six from "./tech stack/java.png";
import seven from "./tech stack/javascript.png";
import eight from "./tech stack/json.png";
import nine from "./tech stack/mysql.png";
import ten from "./tech stack/nodejs.png";
import eleven from "./tech stack/npm.png";
import tweleve from "./tech stack/python.png";
import thirteen from "./tech stack/react.png";
import fourteen from "./tech stack/uiux.png";

function About() {
    return (
        <div className='about'>
            <div className='a-personal'>
                <div className='a-personal-wrapper'>
                   <ul className='a-personal-list'>
                      <li>Name: <span>Nithishkumar Thiruchelvam</span></li>
                      <li>Religion: <span>Developer</span></li>
                      <li>Caste: <span>FullStack Developer</span></li>
                      <li>Marital-Status: <span>Married with Javascript</span></li>
                      <li>Childrens: <span>React & Angular</span></li>
                      <li>Live-in: <span>Athesit-World</span></li>
                      <li>Interests: <span>Coding...Coding...Coding</span></li>
                      <li>Hobby: <span>Learning new stuffs</span></li>
                   </ul>
                </div>
            </div>
            <div className='a-exp'>
               <ul className='a-exp-one'>
                  <li>Company: <span>dummy</span></li>
                  <li>Designation: <span>dummy</span></li>
                  <li>Period: <span>dummy</span></li>
               </ul>
               <ul className='a-exp-two'>
                  <li>Company: <span>dummy</span></li>
                  <li>Designation: <span>dummy</span></li>
                  <li>Period: <span>dummy</span></li>
               </ul>
               <ul className='a-exp-three'>
                  <li>Company: <span>dummy</span></li>
                  <li>Designation: <span>dummy</span></li>
                  <li>Period: <span>dummy</span></li> 
               </ul>
            </div>
          
            <div className='a-skills'>
               <div className='one'>
                   <img src={one} alt='angular'/>
               </div>
               <div className='two'>
                   <img src={two} alt='angular'/>
               </div>
               <div className='three'>
                   <img src={three} alt='angular'/>
               </div>
               <div className='four'>
                   <img src={four} alt='angular'/>
               </div>
               <div className='five'>
                   <img src={five} alt='angular'/>
               </div>
               <div className='six'>
                   <img src={six} alt='angular'/>
               </div>
               <div className='seven'>
                   <img src={seven} alt='angular'/>
               </div>
               <div className='eight'>
                   <img src={eight} alt='angular'/>
               </div>
               <div className='nine'>
                   <img src={nine} alt='angular'/>
               </div>
               <div className='ten'>
                   <img src={ten} alt='angular'/>
               </div>
               <div className='eleven'>
                   <img src={eleven} alt='angular'/>
               </div>
               <div className='twelve'>
                   <img src={tweleve} alt='angular'/>
               </div>
               <div className='thirteen'>
                   <img src={thirteen} alt='angular'/>
               </div>
               <div className='fourteen'>
                  <img src={fourteen} alt='angular'/>
               </div>
            </div>
        </div>
    );
}

export default About;