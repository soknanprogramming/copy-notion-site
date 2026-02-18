import React from "react";

interface Props {
    className?: string;
    title: string;
    type_of_col: "feature" | "header" | "sample";
    children: React.ReactNode;
}

const ListColMenu: React.FC<Props> = ({
    title,
    type_of_col,
    children,
    className = "",
}) => {
    function renderContent() {
        switch (type_of_col) {
            case "feature":
                return <div className="">{children}</div>;
            case "header":
                return <div className="flex flex-col [&>*>*]:text-2xl [&>*>*]:font-bold [&>*>*]:py-1 [&>*>*]:hover:bg-gray-200 [&>*>*]:pl-2 [&>*>*]:rounded-sm">{children}</div>;
            case "sample":
                return <div className="flex flex-col [&>*>*]:text-sm [&>*>*]:py-1 [&>*>*]:font-medium [&>*>*]:hover:bg-gray-200 [&>*>*]:pl-2 [&>*>*]:rounded-sm">{children}</div>;
        }
    }
    return (
        <div className={`${className}`}>
            <p className="text-xs text-gray-500 mb-2">{title}</p>
            {renderContent()}
        </div>
    )
}

export default ListColMenu;