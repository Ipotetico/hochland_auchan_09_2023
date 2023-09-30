import React from 'react'
import Promo from '../Promo/Promo'
import Form from '../Form/Form'

import './Konkurs.scss'

const Konkurs = ({ open, setOpen, name, setName, surename, setSurename, email, setEmail, paragon, setParagon, phone, setPhone, answer, setAnswer, radio, setRadio, consent, setConsent, validPhone, setValidPhone }) => {



    return (
        <div className="container_konkurs">
            <Promo />
            <Form open={open} setOpen={setOpen} name={name} setName={setName} surename={surename} setSurename={setSurename} email={email} setEmail={setEmail} paragon={paragon} setParagon={setParagon} phone={phone} setPhone={setPhone} answer={answer} setAnswer={setAnswer} radio={radio} setRadio={setRadio} consent={consent} setConsent={setConsent} validPhone={validPhone} setValidPhone={setValidPhone} />

            <footer className="arc">
                <img src={process.env.PUBLIC_URL + `/images/arc.svg`} alt="" />
            </footer>
        </div>
    )
}

export default Konkurs