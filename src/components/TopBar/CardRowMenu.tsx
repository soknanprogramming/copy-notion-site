import React from "react";

interface Props {
    className?: string;
    children: React.ReactNode;
}

const CardRowMenu: React.FC<Props> = ({ className = "", children }) => {
    return (
        <div className={`${className} bg-white justify-between flex p-3 border w-2xl *:w-55 mx-auto rounded-2xl`}>
            {children}
        </div>
    )
}

export default CardRowMenu;