import { Link } from 'react-router-dom';

interface Props {
    heading: string;
    subHeading: string;
    height: string;
    buttonText?: string;
    buttonLink?: string;
}
const Hero = (props: Props) => {
    return (
        <>
            <div className={`w-[100%] bg-gradient-to-r from-orange-500 to-amber-500`}
                style={{ height: props.height }} >
                <div className="flex flex-col items-center justify-center gap-4 h-full py-2 text-white text-center">
                    <h1 className="font-bold text-4xl">{props.heading}</h1>
                    <p className="text-xl pt-3 pb-8 max-w-3xl">{props.subHeading}</p>
                    {props.buttonText &&
                        <Link to={props.buttonLink || "/"}
                        className="bg-white text-[#f97316] text-xl px-7 py-4 rounded transition-all duration-300 transform hover:-translate-y-1 hover:bg-orange-100">
                            {props.buttonText}
                        </Link>}
                </div>
            </div>
        </>
    )
}

export default Hero
