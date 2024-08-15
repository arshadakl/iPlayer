
import Hero from "@/components/specific/Hero"
import NavBar from "../components/layout/NavBar"
import SubMenu from "../components/layout/SubMenu"
import ScrollCards from "../components/specific/ScrollCards"
import Footer from "@/components/layout/Footer"
import { FooterSub } from "@/components/layout/Footer"



function HomePage() {
  return (
    <>
      <NavBar />
      <SubMenu />
      <Hero main_hero={true}/>
      <ScrollCards isPortrait={false} genres="Action" title="New & Trending" />
      <Hero main_hero={false}/>
      <ScrollCards isPortrait={true} genres="Documentary"  title="Stream Every Episode" />
      <ScrollCards isPortrait={false} genres="Fantasy" title="Most Popular" />
      <ScrollCards isPortrait={false} genres="Comedy" title="Comedy" />
      <ScrollCards isPortrait={false} genres="Musical" title="Entertainment" />
      <ScrollCards isPortrait={false} genres="Romance" title="Romance" />
      <ScrollCards isPortrait={false} genres="Thriller" title="Crime" />
      <ScrollCards isPortrait={false} genres="Horror" title="Horror" />
      <FooterSub/>
      <Footer/>
    
    </>
  )
}

export default HomePage