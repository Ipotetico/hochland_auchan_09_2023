import React from 'react'
import './InputMobile.scss'

const InputMobile = ({ name, type, textarea, action, capitalize, handleChange }) => {




    return (
        <div className={textarea ? "wiersz_mobile textarea" : "wiersz_mobile"}>
            <input style={{ textTransform: capitalize ? "capitalize" : "none" }} name={name} onChange={handleChange} type={type} />
            <label className='label_mobile' htmlFor="">{name}</label>

        </div>
    )
}

export default InputMobile