import React from 'react'
import Hero from '../components/hero-section/Hero'
import Second from '../components/section-two/Second'
import Section03 from '../components/section-three/Section03'
import SectionFour from '../components/section-four/SectionFour'
import Section05 from '../components/section-five/Section05'
import Section06 from '../components/section-06/Section06'
import ContactForm from '../components/contact-section/ContactForm'
import LoginToStart from '../components/loginStart/LoginToStart'

const Home = () => {
  return (
    <div className='text-white'>
      <Hero />
      <Second />
      <Section03/>
      <SectionFour />
      <Section05 />
      <Section06 />
      <ContactForm /> 
      <LoginToStart />
    </div>
  )
}

export default Home
