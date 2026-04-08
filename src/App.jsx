import Header from './components/layout/Header'
import CTASection from './features/home/components/CTASection'
import Footer from './components/layout/Footer'
import FeaturedSection from './features/home/components/FeaturedSection'
import HeroSection from './features/home/components/HeroSection'

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <Header logoSrc="/images/hero/logo.png" />
      <main className="bg-transparent">
        <HeroSection />
        <FeaturedSection />
        {/* <CTASection /> */}
      </main>
      {/* <Footer
        logoSrc="/images/hero/logo.png"
        illustrationSrc="/images/banners/footer-character.png"
      /> */}
    </div>
  )
}

export default App
