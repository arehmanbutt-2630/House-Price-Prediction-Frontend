import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPredictions } from "./features/prediction/predictionSlice";
import type { AppDispatch } from "./app/store";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import RecentPredictionsPage from './components/RecentPredictionsPage'
import PricePredictionPage from './components/PricePredictionPage'
import Navbar from './components/Navbar'


function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPredictions());
  }, [dispatch]);


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
