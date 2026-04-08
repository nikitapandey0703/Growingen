import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header logoSrc="/images/hero/logo.png" />
      <main className="min-h-[55vh]" />
      <Footer
        logoSrc="/images/hero/logo.png"
        illustrationSrc="/images/banners/footer-character.png"
      />
    </div>
  )
}

export default App
