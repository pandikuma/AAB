import React from 'react'
import trash from './bin.png'
import { Link } from "react-router-dom";
import  { useState } from "react";

const SomeElectrical = () => {
    const [items, setItems] = useState([]);
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [NoOfitem, setNoOfitem] = useState("");
    const [date, setDate] = useState("");
    const handleDelete = (index) => {
        // Filter out the item at the given index
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
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
            <div className="main-2">
                <div className="form-section">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Description</label>
                            <select
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            >
                                <option value="Sanding Sealer">Sanding Sealer</option>
                                <option value="White Cement">White Cement</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Remark</label>
                            <select value={type} onChange={(e) => setType(e.target.value)}>
                                <option value="Palace Lights - N 0N17">
                                    Palace Lights - N 0N17
                                </option>
                                <option value="Enlighten 4148">Enlighten 4148</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <select value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}>
                                <option>0</option>
                                <option>1kg</option>
                                <option>1.5kg</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>No.of items</label>
                            <input type="number" value={NoOfitem} onChange={(e) => setNoOfitem(e.target.value)}></input>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>
                <div className="table">
                    <div className="table-section">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sl. No</th>
                                    <th>Description</th>
                                    <th>Remark</th>
                                    <th>Quantity</th>
                                    <th>No.of Item</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.description}</td>
                                        <td>{item.type}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.NoOfitem}</td>
                                        <td><span
              onClick={() => handleDelete(index)}
              
            >
              <img src={trash} alt="#"></img>
            </span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

    
  

export default SomeElectrical