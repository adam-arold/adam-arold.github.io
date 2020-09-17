import React, { useState } from "react";
import { Link } from "@reach/router";
import Portal from "./Portal";

const Nav = () => {

    const [showPortal, setShowPortal] = useState(false);
    const togglePortal = () => {
        setShowPortal(!showPortal)
    }

    return (
        <div>
            <h1>
                <Link to="/">Eisenhower</Link>
                <span
                    onClick={togglePortal}
                    className="oi oi-info pt-2"
                    title="Info"
                    aria-hidden="true"
                    style={{ float: "right" }}></span>
                {
                    showPortal ? (
                        <Portal>
                            <div>This page was created with React.</div>
                            <button type="button" onClick={togglePortal} className="btn btn-primary">OK</button>
                        </Portal>
                    ) : null
                }
            </h1>
        </div>

    );
}
export default Nav;