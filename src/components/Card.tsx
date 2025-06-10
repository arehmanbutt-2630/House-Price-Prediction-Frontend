interface Props {
    heading: string;
    subHeading: string;
    icon: string;
}

const Card = (props: Props) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-4 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] rounded-lg p-6 w-[350px] hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)] transition-shadow duration-300 ease-in-out">
                <div className="flex items-center justify-center bg-[#FFEDD5] h-[56px] w-[56px] rounded-md p-2 mb-4">
                    <img className="h-[32px] w-[32px]" src={props.icon} alt="" />
                </div>
                <h3>{props.heading}</h3>
                <p className="text-center text-gray-500 font-">{props.subHeading}</p>
            </div>
        </>
    )
}

export default Card
