import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { About } from "@/components/home/about"
import { Contact } from "@/components/home/contact"
import { Hero } from "@/components/home/hero"
import { Marquee } from "@/components/home/marquee"
import { Rpa } from "@/components/home/rpa"
import { Sectors } from "@/components/home/sectors"
import { Services } from "@/components/home/services"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Rpa />
        <Sectors />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
