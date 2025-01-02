import './About.css'
import { Link } from 'react-router-dom';

function About(){
    return(
        <>
        <div className='aboutcont'>
            <div className='innerlayer'>
                    <div>
                        <h1 className='text-about'>About Me</h1>
                        <Link to='/about'><button className='learn-btn'>Learn More</button></Link>
                    </div>
            </div>
            
        </div>
        </>
    );
}

export default About