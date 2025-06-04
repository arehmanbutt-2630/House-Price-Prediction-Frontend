import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import RecentPredictionsPage from './components/RecentPredictionsPage'
import PricePredictionPage from './components/PricePredictionPage'
import Navbar from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/predict" element={<PricePredictionPage />} />
        <Route path="/recent-predictions" element={<RecentPredictionsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
