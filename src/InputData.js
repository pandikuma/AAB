import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './InputData.css'

const InputData = () => {
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
            
        </div>
    )
}

export default InputData