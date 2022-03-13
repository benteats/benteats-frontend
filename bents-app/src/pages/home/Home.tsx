import React from 'react'
import Hero from '../../components/home/hero/Hero'
import Navbar from '../../components/home/navbar/Navbar'
import Solution from '../../components/home/solution/Solution'

export default function Home(){
    return(
    <>
        <Navbar />
        <Hero />
        <Solution />
    </>
    )
}