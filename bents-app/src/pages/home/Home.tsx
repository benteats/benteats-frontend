import Hero from '../../components/home/hero/Hero'
import Navbar from '../../components/home/navbar/Navbar'
import Opinion from '../../components/home/opinion/Opinion'
import Solution from '../../components/home/solution/Solution'
import Benefits from '../../components/home/benefits/Benefits'
import Footer from '../../components/home/footer/FooterComponent'
import Tutorial from '../../components/home/tutorial/Tutorial'

export default function Home(){
    return(
    <>
        <Hero />
        <Solution />
        <Opinion />
        <Tutorial />
        <Benefits />
        <Navbar />
        <Footer />
    </>
    )
}