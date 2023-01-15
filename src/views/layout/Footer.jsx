import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="social">
         <SocialIcon url="https://twitter.com/" id="social__icon"/>
         <SocialIcon url="https://facebook.com/" id="social__icon"/>
         <SocialIcon url="https://instagram.com/"id="social__icon"/>
         <SocialIcon url="https://whatsapp.com" id="social__icon"/>
        </div>

        <div className='developer__info'>
          <p className="detail">Developer info:</p>
          <p className="detail"> Sahil Malik </p>
          <p className="detail">Software Engineer</p>
          <p className="detail">sahilmalik15.sm@gmail.com</p>
        </div>
        <p className="copyright">Copyright @2022</p>
      </section>
    </div>
  )
}

export default Footer
