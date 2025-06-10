import Hero from "./Hero"
import Card from "./Card"
import houseIcon from '../assets/house_icon.svg';
import flashIcon from '../assets/flash_icon.svg';
import historyIcon from '../assets/history_icon.svg';

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
            icon={houseIcon}
          />
          <Card
            heading="Instant Results"
            subHeading="Get your predictions instantly with our optimized algorithms. No waiting, no delays."
            icon={flashIcon}
          />
          <Card
            heading="Track History"
            subHeading="Keep track of all your predictions and compare them with actual market values over time."
            icon={historyIcon}
          />
        </div>
      </div>
    </>
  )
}

export default LandingPage
