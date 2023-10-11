import React from 'react'
import './ConsentMobile.scss'

const ConsentMobile = ({ radio, setRadio, copy, open, setOpen }) => {
    return (
        <div className="consentMobile_container">
            <div onClick={() => setRadio(!radio)} className={!radio ? "tick_mobile" : "tick_mobile active"}>
            </div>
            {copy}
        </div>
    )
}

export default ConsentMobile