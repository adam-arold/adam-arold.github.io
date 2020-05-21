import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
    const elRef = useRef(null);
    if (!elRef.current) {
        const div = document.createElement("div");
        elRef.current = div;
    }

    useEffect(() => {
        const portal = document.getElementById("portal");
        portal.appendChild(elRef.current);

        return () => portal.removeChild(elRef.current);
    }, []);

    return createPortal((
        <div id="modal">
            <div className="card">
                <div className="card-body">{children}</div>
            </div>
        </div>
    ), elRef.current);
}

export default Portal;