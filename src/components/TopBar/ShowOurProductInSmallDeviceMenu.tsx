import React from "react";
import { motion } from "framer-motion";
import { BiCalendar } from "react-icons/bi";
import { FaMailchimp } from "react-icons/fa";
import ume_logo from "../../assets/image/logo_ume.png"


const ShowOurProductInSmallDeviceMenu: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
            className="mb-4 px-5"
        >
            <div className="bg-gray-200 md:flex px-4 py-2 rounded-sm">
                <div className="flex md:flex-1 md:items-center py-1.5 group">
                    <img src={ume_logo} className="size-6 md:size-14 mr-2.5" />
                    <div>
                        <h1 className="group-hover:underline md:text-lg underline-offset-2">Notion</h1>
                        <p className="hidden md:block text-xs text-gray-500">Your AI workspace</p>
                    </div>
                </div>
                <div className="md:flex-1">
                    <div className="flex py-1.5 group"><BiCalendar className="size-6 mr-2.5" /><p className="group-hover:underline underline-offset-2">Notion Calendar</p></div>
                    <div className="flex py-1.5 group"><FaMailchimp className="size-6 mr-2.5" /><p className="group-hover:underline underline-offset-2">Notion Mail</p></div>
                </div>
            </div>
        </motion.div>
    )
}

export default ShowOurProductInSmallDeviceMenu;