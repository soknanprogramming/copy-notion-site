import React from "react";
import ListColMenu from "./ListColMenu";
import { Link } from "react-router-dom";

const EveryResourcesMenu: React.FC = () => {
    return (
        <>
            <ListColMenu title="Browse" type_of_col="header">
                <Link to="/"><p>Templates</p></Link>
                <Link to="/"><p>Consultants</p></Link>
                <Link to="/"><p>Integrations</p></Link>
            </ListColMenu>
            <ListColMenu title="Discover" type_of_col="sample">
                <Link to="/"><p>What's New</p></Link>
                <Link to="/"><p>Customer stories</p></Link>
                <Link to="/"><p>Blog</p></Link>
                <Link to="/"><p>Webinars</p></Link>
            </ListColMenu>
            <ListColMenu title="Learn" type_of_col="sample">
                <Link to="/"><p>Academy</p></Link>
                <Link to="/"><p>Product tours</p></Link>
                <Link to="/"><p>Product tours</p></Link>
            </ListColMenu>
        </>
    )
}

export default EveryResourcesMenu;