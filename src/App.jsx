import React, { useState } from 'react'
import { BrowserView, MobileView } from 'react-device-detect';
import './reset.scss'
import Browser from './components/Browser/Browser'
import './App.scss'
import Mobil from './components/Mobil/Mobil';

const App = () => {

  const [open, setOpen] = useState(false)

  const [name, setName] = useState('')
  const [surename, setSurename] = useState('')
  const [email, setEmail] = useState('')
  const [paragon, setParagon] = useState('')

  const [phone, setPhone] = useState('')
  const [validPhone, setValidPhone] = useState(true)

  const [answer, setAnswer] = useState('')
  const [radio, setRadio] = useState(false)
  const [consent, setConsent] = useState(false)

  return (
    <>
      <BrowserView>
        <Browser open={open} setOpen={setOpen} name={name} setName={setName} surename={surename} setSurename={setSurename} email={email} setEmail={setEmail} paragon={paragon} setParagon={setParagon} phone={phone} setPhone={setPhone} answer={answer} setAnswer={setAnswer} radio={radio} setRadio={setRadio} consent={consent} setConsent={setConsent} validPhone={validPhone} setValidPhone={setValidPhone} />
      </BrowserView>
      <MobileView>
        <Mobil open={open} setOpen={setOpen} name={name} setName={setName} surename={surename} setSurename={setSurename} email={email} setEmail={setEmail} paragon={paragon} setParagon={setParagon} phone={phone} setPhone={setPhone} answer={answer} setAnswer={setAnswer} radio={radio} setRadio={setRadio} consent={consent} setConsent={setConsent} validPhone={validPhone} setValidPhone={setValidPhone} />
      </MobileView>
    </>
  )
}

export default App