import React from 'react'
import Hero from '../../components/home/hero/Hero'
import Navbar from '../../components/home/navbar/Navbar'
import Solution from '../../components/home/solution/Solution'
import Benefits from '../../components/home/benefits/Benefits'
import Footer from '../../components/home/footer/FooterComponent'

export default function Home(){
    return(
    <>
        <Hero />
        <Solution />
        <Benefits />
        <Navbar />
        <Footer />
    </>
    )
}