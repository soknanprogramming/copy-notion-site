import React from 'react'
import accordion_background from "../../assets/images/accordion-background.avif";


const NotionAgent: React.FC = () => {
    return (
        <div className="flex justify-between w-7xl mt-9 mb-3 rounded-xl hover:shadow-2xl shadow-gray-400 transition-shadow duration-300">
            <div className="bg-white flex-1 rounded-l-xl">

            </div>
            <div
                className="w-200.5 h-138.5 bg-cover bg-center rounded-r-xl"
                style={{ backgroundImage: `url(${accordion_background})` }}
            ></div>

        </div>
    )
}

export default NotionAgent