import React from 'react';
import {FaCode} from 'react-icons/fa';
import { withRouter } from 'react-router-dom';


const LandingPage=(props)=>{


    return(
     <>
        <div className='app'>
            <FaCode style={{fontSize:'4rem'}} /> <br />
            <span style={{fontSize:'2rem'}}>Let's Start Coding!</span>
        </div>
    </>
    )
}

export default withRouter(LandingPage);