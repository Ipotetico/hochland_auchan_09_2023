import React from 'react'
import './Mobil.scss'
import FormMobile from './FormMobile/FormMobile'

const Mobil = ({ open, setOpen, name, setName, surename, setSurename, email, setEmail, paragon, setParagon, phone, setPhone, answer, setAnswer, radio, setRadio, consent, setConsent, validPhone, setValidPhone }) => {
    return (
        <>
            <div className="mobil_container">

                <img src={process.env.PUBLIC_URL + `/images/mobil/gory_mobil.webp`} alt="" className="background gory" />

                <img src={process.env.PUBLIC_URL + `/images/mobil/chmury_mobil.webp`} alt="" className="background chmury" />

                <img src={process.env.PUBLIC_URL + `/images/mobil/headline_mobile.svg`} alt="" className="headline" />

                <div className="copy">
                    <img src={process.env.PUBLIC_URL + `/images/mobil/arc_mobile.svg`} alt="" className="arc" />

                    <div className="konkurs_mobile">
                        <img src={process.env.PUBLIC_URL + `/images/nagroda_copy.svg`} alt="" className="nagroda" />

                        <video className="nagroda blender" autoPlay loop muted playsInline>
                            <source src={process.env.PUBLIC_URL + `/video/blender.mp4`} type="video/mp4" />
                        </video>

                        <img src={process.env.PUBLIC_URL + `/images/mobil/mechanika_mobile.svg`} alt="" className="nagroda" />

                        <FormMobile />
                    </div>

                </div>

            </div>
        </>

    )
}

export default Mobil