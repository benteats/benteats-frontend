import React from 'react'
import Hero from '../../components/home/hero/Hero'
import Navbar from '../../components/home/navbar/Navbar'
import Opinion from '../../components/home/opinion/Opinion'
import Solution from '../../components/home/solution/Solution'
import Tutorial from '../../components/home/tutorial/Tutorial'

export default function Home(){
    return(
    <>
        <Hero />
        <Solution />
        <Opinion />
        <Tutorial />
        <Navbar />
    </>
    )
}