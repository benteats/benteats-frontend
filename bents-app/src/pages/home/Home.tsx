import React from 'react'
import Hero from '../../components/home/hero/Hero'
import Navbar from '../../components/home/navbar/Navbar'
import Solution from '../../components/home/solution/Solution'
import Funcionalities from '../../components/home/functionalities/Functionalities'

export default function Home(){
    return(
    <>
        <Hero />
        <Solution />
        <Funcionalities />
        <Navbar />
    </>
    )
}