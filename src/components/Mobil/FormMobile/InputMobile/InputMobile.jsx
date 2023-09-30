import React from 'react'
import './InputMobile.scss'

const InputMobile = ({ content, type, textarea }) => {
    return (
        <div className={textarea ? "wiersz_mobile textarea" : "wiersz_mobile"}>
            <input type={type} />
            <label className='label_mobile' htmlFor="">{content}</label>
        </div>
    )
}

export default InputMobile