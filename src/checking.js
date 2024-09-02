import React, { useState } from "react";
import "./MainContent.css";
import { Link, useLocation } from "react-router-dom";
import Test from "./test";

const MainContent = () => {
    const [items, setItems] = useState([]);
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [NoOfitem, setNoOfitem] = useState("");
    const [vendorName, setVendorName] = useState("");
    const [clientName, setClientName] = useState("");
    const [date, setDate] = useState("");
    const [siteIncharge, setSiteIncharge] = useState("");

    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };



    return (
        <div>
            <div className="topbar-title">
                <h3>
                    <Link
                        className={`link ${activeLink === '/main' ? 'active' : ''}`}
                        to='/'
                        onClick={() => handleLinkClick('/main')}
                    >
                        Purchase Order
                    </Link>
                </h3>
                <h3>
                    <Link
                        className={`link ${activeLink === '/History' ? 'active' : ''}`}
                        to='/History'
                        onClick={() => handleLinkClick('/History')}
                    >
                        History
                    </Link>
                </h3>
                <h3>
                    <Link
                        className={`link ${activeLink === '/InputData' ? 'active' : ''}`}
                        to='/InputData'
                        onClick={() => handleLinkClick('/InputData')}
                    >
                        Input Data
                    </Link>
                </h3>
            </div>
        </div>
    );
};


export default MainContent;
