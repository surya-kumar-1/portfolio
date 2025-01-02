import './ContactForm.css';

function ContactForm(){
    return(
        <>
        <div className="Contact-form">
            
            <div className='outer-layer'>

                <div className='inner-layer'>
                    <h1 className='formtext-1'>Interested? Contact Here</h1>
                    <p className='name-text'>name</p>
                    <input className='input-1' type="text" placeholder='Steve Jobs'/>
                    <p className='email-text'>Email</p>
                    <input className='input-2' type="text" placeholder='Steve@apple.com'/>
                    <p className='job-text'>Job Description</p>
                    <textarea className='discriptionbox' name="" id="" placeholder='Tell me about the job. Please include details such as industry type, job requirements, and the website link if available'></textarea>
                    <button className='ping-btn'>Ping me up</button>
                    <p className='policy'>By submitting this form you agree to the <a href="">privacy policy</a></p>
                </div>

            </div>
            
        </div>
        </>
    );
}

export default ContactForm