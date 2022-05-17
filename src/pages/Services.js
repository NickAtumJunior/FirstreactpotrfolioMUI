import React from 'react';
import design from './service/design.png';
import teaching from './service/teaching.png';
import freelance from './service/freelance.png';
import development from './service/coding.png';
import branding from './service/branding.png';
import consultant from './service/consultant.png';

function Services() {
    return (
        <div className='services'>
            <div className='s-one'>
                <div className='s-one-logo'>
                     <center><img src={design} alt='design'/></center>
                </div>
                <div className='s-one-describe'>
                  <center>
                  <p>
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                  </p>
                   
                  </center>
                  <center><button>Need this</button></center>
                </div>
            </div>
            <div className='s-two'>
                  <div className='s-two-logo'>
                    <center><img src={teaching} alt='teaching'/></center>
                 </div>
                 <div className='s-two-describe'>
                 <center>
                  <p>
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                  </p>
                  </center>
                  <center><button>Need this</button></center>
                 </div>
            </div>
            <div className='s-three'>
                <div className='s-three-logo'>
                  <center><img src={freelance} alt='freelancing'/></center>
                </div> 
                <div className='s-three-describe'>
                <center>
                  <p>
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                  </p>
                  </center>
                  <center><button>Need this</button></center>
                </div>
            </div>
            <div className='s-four'>
                <div className='s-four-logo'>
                   <center><img src={development} alt='development'/></center>
                 </div> 
                <div className='s-four-describe'>
                <center>
                  <p>
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                  </p>
                  </center>
                  <center><button>Need this</button></center>
                </div>
            </div>
            <div className='s-five'>
                 <div className='s-five-logo'>
                   <center><img src={branding} alt='branding'/></center>
                 </div> 
                 <div className='s-five-describe'>
                 <center>
                  <p>
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                  </p>
                  </center>
                  <center><button>Need this</button></center>
                 </div>
            </div>
            <div className='s-six'>
                <div className='s-six-logo'>
                   <center><img src={consultant} alt='consultant'/></center>
                </div> 
                <div className='s-six-describe'>
                <center>
                  <p>
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                   Design beautiful websites along with good 
                   tools and tremendous team.we made our 
                   customers profitable and with proficient toush
                   always looking forward to implement client needs 
                  </p>
                  </center>
                  <center><button>Need this</button></center>
                </div>
            </div>
        </div>
    );
}

export default Services;