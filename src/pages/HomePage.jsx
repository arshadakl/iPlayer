
import Hero from "@/components/specific/Hero"
import NavBar from "../components/layout/NavBar"
import SubMenu from "../components/layout/SubMenu"
import ScrollCards from "../components/specific/ScrollCards"
import Footer from "@/components/layout/Footer"



function HomePage() {
  return (
    <>
    
      <NavBar />
      <SubMenu />
      <Hero main_hero={true}/>
      <ScrollCards isPortrait={false} title="New & Trending" />
      <Hero main_hero={false}/>
      <ScrollCards isPortrait={true}  title="Stream Every Episode" />
      <ScrollCards isPortrait={false}  title="Most Popular" />
      <ScrollCards isPortrait={false}  title="Comedy" />
      <Footer/>
    
    </>
  )
}

export default HomePage