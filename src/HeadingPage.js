import React, { useState } from "react";
import './HeadingPage.css'
import { Link, useLocation } from "react-router-dom";

const HeadingPage = () => {
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
                        className={`link ${activeLink === '/' ? 'active' : ''}`}
                        to='/'
                        onClick={() => handleLinkClick('/')}
                    >
                        PurchaseOrder
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
  )
}

export default HeadingPage