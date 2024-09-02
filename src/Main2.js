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
                            <label>Type</label>
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
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="table">
                <div className="table-section">
                    <table>
                        <thead>
                            <tr>
                                <th>Sl. No</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.description}</td>
                                    <td>{item.type}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>