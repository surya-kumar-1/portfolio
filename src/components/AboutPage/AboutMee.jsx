import './AboutMee.css';

function AboutMee() {
    return (
        <>
            <div className='aboutmemain'>
                <div className='about-content'>
                    <div className='aboutcontent-2'>
                        <h1 className='cta-text-about'>About me</h1>
                        <p className='cta-para-1'>
                            Creativity has always been my constant companion—whether it was doodling on school desks 
                            (and occasionally getting caught!) or exploring design tools as a teenager. At 13, I discovered 
                            my passion for design by creating personalized Photoshop signatures for my friends, and that passion 
                            has only grown stronger over the years.
                        </p>
                        <p className='cta-para-2'>
                            With experience of three years in software, I've honed my ability to merge creativity with technical expertise. 
                            As a creative thinker and highly motivated professional, I thrive in collaborative environments where brainstorming 
                            and teamwork lead to innovative solutions.
                        </p>
                        <p className='cta-para-3'>
                            My journey has allowed me to combine my love for design, technology, and understanding people—a blend that drives 
                            me to create impactful and user-centric designs. Staying up-to-date with the latest trends and tools keeps me inspired, 
                            and I'm always eager to connect with others in the industry who share the same passion.
                        </p>
                        {/* Add an anchor tag for the CV download */}
                        <a className='btn-cv' href="../src/assets/cv-22.pdf" download="My_CV.pdf">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className='main-cta-sidebox'>
                    <div className='cta-sidebox'>
                        {/* <img className='about-profile' src="../src/assets/ab-pro-1.png" alt="" /> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMee;
