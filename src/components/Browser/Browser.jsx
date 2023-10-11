import React from 'react'

import Konkurs from './Konkurs/Konkurs'
import Topper from './Topper/Topper'

import './Browser.scss'
import Regulamin from '../Regulamin/Regulamin'

const Browser = ({ open, setOpen, name, setName, surename, setSurename, email, setEmail, paragon, setParagon, phone, setPhone, answer, setAnswer, radio, setRadio, consent, setConsent, validPhone, setValidPhone }) => {



  return (
    <>
      <div className="container">
        <Regulamin open={open} setOpen={setOpen} />

        <Topper />

        <Konkurs open={open} setOpen={setOpen} name={name} setName={setName} surename={surename} setSurename={setSurename} email={email} setEmail={setEmail} paragon={paragon} setParagon={setParagon} phone={phone} setPhone={setPhone} answer={answer} setAnswer={setAnswer} radio={radio} setRadio={setRadio} consent={consent} setConsent={setConsent} validPhone={validPhone} setValidPhone={setValidPhone} />
      </div >

    </>
  )
}

export default Browser