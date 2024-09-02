import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './History.css'

const History = () => {
    const [items, setItems] = useState([]);
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [NoOfitem, setNoOfitem] = useState("");
    const [vendorName, setVendorName] = useState("");
    const [clientName, setClientName] = useState("");
    const [date, setDate] = useState("");
    const [siteIncharge, setSiteIncharge] = useState("");
  return (
    <div>
            <div className="main-content">
                <div className="main-1">
                    <div className="header-section">
                        <div className="section">
                            <label>Vendor Name</label>
                            <select
                                value={vendorName}
                                onChange={(e) => setVendorName(e.target.value)}
                            >
                                <option value="">Select Vendor</option>
                                <option value="Thangapandar Paints">Thangapandar Paints</option>
                                <option>SomeElectrical</option>
                            </select>
                        </div>
                        <div className="section">
                            <label>Client Name</label>
                            <select
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                            >
                                <option>Client Name</option>
                                <option>
                                    Muthukumar - Krishnnan kovil
                                </option>
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
                        <div className="section">
                            <div className="section-2">
                                <label>Site Incharge</label>
                                <select
                                    value={siteIncharge}
                                    onChange={(e) => setSiteIncharge(e.target.value)}
                                >
                                    <option value="">Select Site Incharge</option>
                                    <option value="Selva Ganesh">Selva Ganesh</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
  

export default History