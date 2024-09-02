import React, { useState } from "react";
import "./MainContent.css";
import { Link, useLocation } from "react-router-dom";
import Test from "./test";
import Test1 from './SomeElectrical';

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

    const handleDelete = (index) => {
        // Filter out the item at the given index
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const options = [
        { value: "Thangapandar Paints", label: "Thangapandar Paints" },
        { value: "SomeElectrical", label: "SomeElectrical" },
    ];

    const renderContent = () => {
        switch (vendorName) {
            case "Thangapandar Paints":
                return <Test />;
            case "SomeElectrical":
                return <Test1 />;
            default:
                return null;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            description,
            type,
            quantity,
            NoOfitem,
        };
        setItems([...items, newItem]);
        setDescription("");
        setType("");
        setQuantity("");
        setNoOfitem("");
    };

    return (
        <div>
            <div className="main-content">
                <div className="main-1">
                    <div className="header-section">
                        <div className="section">
                            <label>Vendor Name</label>
                            <select onChange={(e) => setVendorName(e.target.value)} value={vendorName}>
                                <option>Select...</option>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="section">
                            <label>Client Name</label>
                            <select 
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                            >
                                <option>Client Name</option>
                                <option>Muthukumar - Krishnnan kovil</option>
                            </select>
                        </div>
                        <div className="section">
                            <label>Date</label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <div className="section-1">
                            <label>PO.No</label>
                            <input type="number"></input>
                        </div>
                            <div className="section-2">
                                <label>Site Incharge</label>
                                <select
                                    value={siteIncharge}
                                    onChange={(e) => setSiteIncharge(e.target.value)}
                                >
                                    <option value="Selva Ganesh">Selva Ganesh</option>
                                </select>
                                <p>6545153465</p>
                            </div>
                    </div>
                </div>
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    );
};


export default MainContent;
