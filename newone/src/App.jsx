import Header from './components/common/header'
import Footer from './components/common/footer'
import Home from './components/pages/home'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-700">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App

