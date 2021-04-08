import { useState } from 'react'

const Hamburger = () => {
    const [click, setClick] = useState("false")

    const burgerToggle = () => {
        setClick(!click)
    }
    return (
        // <button className="burger">
        //     <div className="bun top-bun"></div>
        //     <div className="bun meat"></div>
        //     <div className="bun bottom-bun"></div>
        // </button>

        <svg id="burger" width="250" height="200" viewBox="0 0 200 100" onClick={burgerToggle}>
            <g className="clicked"> {/* {click ? "clicked" : ""}*/}
                <rect className="bun" id="top-bun" x="0" y="0" />
                <rect className="bun" id="meat" x="0" y="30" />
                <rect className="bun" id="bottom-bun" x="0" y="60" />
            </g>    
        </svg>
    )
};

export default Hamburger;
