const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center  px-6 py-3 text-[#f97316]">
        <h1 className=" font-monospace font-bold text-2xl">HousingAI</h1>
        <div className="flex gap-4">
            <button className="bg-[#f97316] text-white  px-5 py-2 rounded">PREDICT PRICE</button>
            <button className="bg-[#f97316] text-white  px-5 py-2 rounded">RECENT PREDICTIONS</button>
        </div>
    </nav>
    </>
  )
}

export default Navbar
