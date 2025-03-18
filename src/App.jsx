import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CompanyLogo from './components/CompanyLogo'
import './App.css'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import PricingSection from './components/PricingSection'
import ServiceSection from './components/ServiceSection'
import TestimonialSection from './components/TestimonialSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen overflow-x-hidden'>
    <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10'>
    </div>
    <div className='overflow-hidden'>
    <Navbar/>
    <Hero/>
    <CompanyLogo/>
    <PurposeSection/>
    <FeaturesSection/>
    <ScheduleSection/>
    <MonitorSection/>
    <PricingSection/>
    <ServiceSection/>
    <TestimonialSection/>
    <NewsletterSection/>
    <Footer/>
    </div>
  </main>
  )
}

export default App
