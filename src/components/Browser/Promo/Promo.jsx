import React from 'react'
import './Promo.scss'

const Promo = () => {
    return (
        <div className="promo_container">
            <div className="red">
                <img src={process.env.PUBLIC_URL + `/images/nagroda_copy.svg`} alt="nagroda copy" />
            </div>
            <div className="nagroda">
                <img src={process.env.PUBLIC_URL + `/images/blender_nagroda.webp`} alt="blender" />
            </div>
            <div className='red' target='blank' href="https://wygrajzalmette.pl">
                <img src={process.env.PUBLIC_URL + `/images/mechanika.svg`} alt="mechanika" />
            </div>
        </div>
    )
}

export default Promo