import { useState } from "react";
import Hero from "./Hero";

const RecentPredictionsPage = () => {
    const PAGE_SIZE = 5;

    const mockData = [
        { id: 1, squareFootage: 1800, bedrooms: 3, predictedPrice: "$350,000" },
        { id: 2, squareFootage: 2200, bedrooms: 4, predictedPrice: "$420,000" },
        { id: 3, squareFootage: 2500, bedrooms: 5, predictedPrice: "$510,000" },
        { id: 4, squareFootage: 1600, bedrooms: 2, predictedPrice: "$300,000" },
        { id: 5, squareFootage: 2000, bedrooms: 3, predictedPrice: "$390,000" },
        { id: 6, squareFootage: 1800, bedrooms: 3, predictedPrice: "$350,000" },
        { id: 7, squareFootage: 2200, bedrooms: 4, predictedPrice: "$420,000" },
        { id: 8, squareFootage: 2400, bedrooms: 5, predictedPrice: "$510,000" },
        { id: 9, squareFootage: 1800, bedrooms: 2, predictedPrice: "$300,000" },
        { id: 10, squareFootage: 2000, bedrooms: 3, predictedPrice: "$390,000" },
    ];

    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(mockData.length / PAGE_SIZE);
    const paginatedData = mockData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    return (
        <>
            <Hero
                heading="Recent Predictions"
                subHeading="View the most recent housing price predictions made on our platform."
                height="230px"
            />

            <div className="flex flex-col items-center justify-center gap-8 pt-10 px-4 bg-gray-50 ">
                <h2 className="text-3xl text-[#f97316] font-bold">Recent Predictions</h2>

                <div className="w-full max-w-2xl">
                    <div className="overflow-hidden rounded-xl shadow-xl bg-white">
                        <table className="min-w-full text-sm text-left text-gray-700">
                            <thead className="bg-gray-100 text-xs uppercase tracking-wider text-gray-600">
                                <tr>
                                    <th className="px-6 py-4 text-center">Square Footage</th>
                                    <th className="px-6 py-4 text-center">Bedrooms</th>
                                    <th className="px-6 py-4 text-center">Predicted Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData.map((row, index) => (
                                    <tr
                                        key={row.id}
                                        className={
                                            index % 2 === 0
                                                ? "bg-white hover:bg-gray-100"
                                                : "bg-gray-100 hover:bg-gray-100"
                                        }
                                    >
                                        <td className="px-6 py-4 font-medium text-center">{row.squareFootage} sqft</td>
                                        <td className="px-6 py-4 text-center">{row.bedrooms}</td>
                                        <td className="px-6 py-4 text-orange-500 font-semibold text-center">{row.predictedPrice}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        <button
                            className="px-4 py-2 bg-orange-100 text-orange-600 hover:bg-orange-200 rounded-md transition disabled:opacity-50"
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                        >
                            Previous
                        </button>
                        <span className="text-gray-600 font-medium">
                            Page {page} of {totalPages}
                        </span>
                        <button
                            className="px-4 py-2 bg-orange-100 text-orange-600 hover:bg-orange-200 rounded-md transition disabled:opacity-50"
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentPredictionsPage;
