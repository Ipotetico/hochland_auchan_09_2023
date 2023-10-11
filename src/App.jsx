import React, { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import Browser from './components/Browser/Browser'
import Mobil from './components/Mobil/Mobil';
import { db } from './firebase';
import { uid } from 'uid';
import { set, ref } from "firebase/database";

import './reset.scss'
import './App.scss'

const App = () => {


  const styleMobile = {
    width: '100%',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aqua',
    padding: '2vh',
    boxSizing: 'border - box',
    marginBottom: '3vh',
  }

  function writeUserData(user) {
    const uuid = uid()
    set(ref(db, `/${uuid}`), {
      user,
      uuid,
    });
  }

  const [open, setOpen] = useState(false)

  const [radio, setRadio] = useState(false)
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState([])
  const [show, setShow] = useState(false)
  const [capcha, setCapcha] = useState(false)

  const [user, setUser] = useState({
    imię: '',
    nazwisko: '',
    email: '',
    telefon: '',
    paragon: '',
    odpowiedź: '',
  })



  const handleChange = async (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  }

  const writeToDatabase = () => {
    const uuid = uid()
    set(ref(db, `/${uuid}`), {
      user,
      uuid,
    });
    setUser({})
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([])

    if (user.imię.length < 3) {
      setErrors((prev) => [...prev, 'Proszę podać imię'])
    }
    else if (user.nazwisko.length === 0) {
      setErrors((prev) => [...prev, 'Proszę podać nazwisko'])
    }

    else if (user.email.length === 0) {
      setErrors((prev) => [...prev, 'Proszę podać adres email'])
    }

    else if (user.telefon.length === 0) {
      setErrors((prev) => [...prev, 'Proszę podać numer telefonu'])
    }

    else if (user.paragon.length === 0) {
      setErrors((prev) => [...prev, 'Proszę podać symbol paragonu'])
    }

    else if (user.odpowiedź.length === 0) {
      setErrors((prev) => [...prev, 'Proszę podać odpowiedź'])
    }

    else if (radio === false) {
      setErrors((prev) => [...prev, 'Proszę zapoznać się z regulaminem'])
    }

    else if (consent === false) {
      setErrors((prev) => [...prev, 'Proszę zaznaczyć zgodę RODO'])
    }

    else {
      setErrors([])
      setShow(true)
      writeToDatabase()
      setUser({})
    }
  }

  console.log(errors)
  console.log(user)

  return (
    <>
      {/* <BrowserView>
        <Browser open={open} setOpen={setOpen} name={name} setName={setName} surename={surename} setSurename={setSurename} email={email} setEmail={setEmail} paragon={paragon} setParagon={setParagon} phone={phone} setPhone={setPhone} answer={answer} setAnswer={setAnswer} radio={radio} setRadio={setRadio} consent={consent} setConsent={setConsent} validPhone={validPhone} setValidPhone={setValidPhone} handleSubmit={handleSubmit} errors={errors} setErrors={setErrors} capcha={capcha} setCapcha={setCapcha} />
      </BrowserView> */}
      {/* <MobileView>
        <Mobil open={open} setOpen={setOpen} name={name} setName={setName} surename={surename} setSurename={setSurename} email={email} setEmail={setEmail} paragon={paragon} setParagon={setParagon} phone={phone} setPhone={setPhone} answer={answer} setAnswer={setAnswer} radio={radio} setRadio={setRadio} consent={consent} setConsent={setConsent} validPhone={validPhone} setValidPhone={setValidPhone} handleSubmit={handleSubmit} errors={errors} setErrors={setErrors} show={show} setShow={setShow} capcha={capcha} setCapcha={setCapcha} style={styleMobile} />
      </MobileView> */}

      <MobileView>
        <Mobil open={open} setOpen={setOpen} errors={errors} radio={radio} setRadio={setRadio} handleChange={handleChange} handleSubmit={handleSubmit} show={show} setShow={setShow} capcha={capcha} setCapcha={setCapcha} consent={consent} setConsent={setConsent} style={styleMobile} />
      </MobileView>
    </>
  )
}

export default App