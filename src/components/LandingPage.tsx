import Hero from "./Hero"
import Card from "./Card"

const LandingPage = () => {
  return (
    <>
      <Hero
        heading="Predict Your Home's Future Value"
        subHeading="Get accurate housing price predictions powered by advanced machine learning algorithms. Make informed decisions about your real estate investments."
        height="400px"
        buttonText="START PREDICTING NOW"
        buttonLink="/predict"
      />
      <div className="flex flex-col items-center justify-center gap-8 py-10">
        <h2 className="text-3xl text-[#f97316] font-bold">Why Choose Our Platform</h2>
        <div className="flex flex-wrap justify-center items-center gap-14">
          <Card
            heading="Accurate Predictions"
            subHeading="Our advanced AI model provides highly accurate housing price predictions based on comprehensive market data."
            icon="/house_icon.svg"
          />
          <Card
            heading="Instant Results"
            subHeading="Get your predictions instantly with our optimized algorithms. No waiting, no delays."
            icon="/flash_icon.svg"
          />
          <Card
            heading="Track History"
            subHeading="Keep track of all your predictions and compare them with actual market values over time."
            icon="/history_icon.svg"
          />
        </div>
      </div>
    </>
  )
}

export default LandingPage
