import React from "react";

export default function Footer() {
    function showDev() {
        document.getElementById("diego").classList.toggle("slideIn");
    }

    return (
        <div>

        <footer className="developersFooter">
            <ul className="developerNames">
                <ul className="amazingDev">Claudius Solomon</ul>
                <ul className="amazingDev" onClick={showDev}>
                    <li>Diego Bueno</li>
                    <ul className="onlineProfilesPannel " id="diego">
                        <li>LinkedIn</li>
                        <li>GitHub</li>
                        <li>Angel List</li>
                    </ul>
                </ul>
                <ul className="amazingDev">Nathan Reinhardt</ul>
            </ul>
        </footer>
        <div className="test">
            poooorrra
        </div>
        </div>
    );
}