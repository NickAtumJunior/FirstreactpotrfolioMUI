import React from 'react';
import user from './images/casual-life-3d-young-man-sitting-at-green-desk-and-raising-his-hand.png'
function Home() {
   
    const homePage = (e) => {
        window.scrollTo({
          top:0,
          left:0,
          behavior:"smooth"
        })
      
    }
    const aboutPage = (e) => {
        window.scrollTo({
            top: 600,
            left:0,
            behavior:"smooth"
        })
    }
    const servicePage = (e) => {
        window.scrollTo({
            top: 2100,
            left:0,
            behavior:"smooth"
        })
    }
    const portfolioPage = (e) => {
        window.scrollTo({
            top: 2800,
            left:0,
            behavior:"smooth"
        })
    }
    const contactPage = (e) => {
        window.scrollTo({
            top: 3500,
            left:0,
            behavior:"smooth"
        })
    }
    return (
        <div className='home'>
            <nav className='navigation-bar'>
                <ul>
                    <li><button onClick={homePage}>Home</button></li>
                    <li><button onClick={aboutPage}>About</button></li>
                    <li><button onClick={servicePage}>Services</button></li>
                    <li><button onClick={portfolioPage}>Portfolio</button></li>
                    <li><button onClick={contactPage}>Conatct</button></li>
                </ul>
            </nav>
            <div className='h-left'>
                <h1 className='h-name-txt'>I'm NithishAtum</h1>
                <h2>FullStack Developer<br></br>Based in india....</h2>
                <div className='i-tittle'>
                     <div className='i-tittle-wrapper'>
                        <div className='i-ittle-item'>Web-Developer</div>
                        <div className='i-ittle-item'>UI/UX Developer</div>
                        <div className='i-ittle-item'>Photographer</div>
                        <div className='i-ittle-item'>Writer</div>
                        <div className='i-ittle-item'>Content</div>
                     </div>
                </div>
                <p>
                  I'm Nithishkumar Thiruchelvam.I'm really excited about programming
                  but i hate maths,because it's ruining my mind then it's huhuo huhguhero hohoho
                  bihguihi hhiohgiohgo hoghoiehgiehgoie hghigjspoj hghoifghfhgoifhgi jjfdlkdsjkldj gd 
                  gihigighimio himhvohoihoithoimo joivmomoioittjhvi hoiynwvoinoiy hoivnyohivhwio
                  mntviwoopoimwvuouwvu uvuv9uuouu jnikghnmjhmg,jfkjfnokhf okjhlkfdnkfjfj
                </p>
                <button>Hire me</button>  <button>Contact me</button>

                <ul className='h-left-social'>
                    <li><a href='https://facebook.com/in/nithishkumarthiruchelvam'>facebook</a></li>
                    <li>linkedin</li>
                    <li>Github</li>
                </ul>
            </div>
            <div className='h-right'>
                 <img className='right-img' src={user} alt='userimage'/>
            </div>
        </div>
    );
}

export default Home;