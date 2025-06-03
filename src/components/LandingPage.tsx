const LandingPage = () => {
  return (
    <>
    <div className=' w-[100%] h-[400px] bg-gradient-to-r from-orange-500 to-amber-500'>
      <div className="flex flex-col items-center justify-center gap-4 h-full text-white text-center">
        <h1 className="font-bold text-5xl">Predict Your Home's Future Value</h1>
        <p className="text-xl pt-3 pb-8 max-w-3xl">Get accurate housing price predictions powered by advanced machine learning algorithms. Make informed decisions about your real estate investments.</p>
        <button className="bg-white text-[#f97316] text-xl px-7 py-4 rounded">START PREDICTING NOW</button>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <h2 className="text-3xl text-[#f97316] font-bold">Why Choose Our Platform</h2>
      <div className="flex flex-wrap justify-center items-center gap-10">
        <div>
          <img src="" alt="" />
          <h2>Accurate Predictions</h2>
          <p>Our advanced AI model provides highly accurate housing price predictions based on comprehensive market data.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default LandingPage
