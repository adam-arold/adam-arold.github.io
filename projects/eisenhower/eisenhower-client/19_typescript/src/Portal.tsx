import React, { useEffect, useRef, FunctionComponent, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

const Portal: FunctionComponent = ({ children }) => {
    const elRef = useRef(document.createElement("div"));

    useEffect(() => {
        const portal = document.getElementById("portal");
        if(!portal) {
            return;
        }
        portal.appendChild(elRef.current);

        return () => {
            portal.removeChild(elRef.current)
        }
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