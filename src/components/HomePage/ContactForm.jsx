import './ContactForm.css';
import { useState } from 'react';

function ContactForm(){
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [body, setBody] = useState();
    return(
        <>
        <div className="Contact-form">
            <div className='outer-layer'>

                <div className='inner-layer'>
                    <h1 className='formtext-1'>Interested? Contact Here</h1>
                    <p className='name-text'>name</p>
                    <input value={subject} onInput={e => setSubject(e.target.value)} className='input-1' type="text" placeholder='Steve Jobs'/>
                    <p className='email-text'>Email</p>
                    <input type='email' className='input-2' value={email} onInput={e => setEmail(e.target.value)} placeholder='Steve@apple.com'/>
                    <p className='job-text'>Job Description</p>
                    <textarea value={body} onInput={e => setBody(e.target.value)} className='discriptionbox' name="" id="" placeholder='Tell me about the job. Please include details such as industry type, job requirements, and the website link if available'></textarea>
                    <button onClick={() => window.location = `mailto:suryakumar9604@gmail.com?subject=Regarding work (${subject})&body=${body}`} className='ping-btn'>Ping me up</button>
                    {/* <p className='policy'>By submitting this form you agree to the <a href="">privacy policy</a></p> */}
                </div>

            </div>
            
        </div>
        </>
    );
}

export default ContactForm