import React from 'react'
import './Popup.scss'

const Popup = ({ show, setShow }) => {
    return (
        <>
            <div onClick={() => setShow(false)} className={show ? "popup message" : "popup"}>


                <div className={show ? "tlo open" : "tlo"}>
                    <img src={process.env.PUBLIC_URL + `/images/chmury.webp`} alt="" />
                </div>
                <img src={process.env.PUBLIC_URL + `/images/tlo_popup.webp`} alt="" />
            </div>

        </>
    )
}

export default Popup