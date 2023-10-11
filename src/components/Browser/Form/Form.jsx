import React from 'react'
import './Form.scss'

const Form = ({ open, setOpen, name, setName, surename, setSurename, email, setEmail, paragon, setParagon, phone, setPhone, answer, setAnswer, radio, setRadio, consent, setConsent, validPhone, setValidPhone, handleSubmit }) => {



  const handleChangePhone = e => {
    const input = e.target.value;
    setPhone(input)
    setValidPhone(validatePhoneNumber(input))
  }

  const validatePhoneNumber = (number) => {
    const phoneNumberPattern = /^d(10)$/;
    return phoneNumberPattern.test(phone)
  }


  return (
    <>
      <form className='form'>
        <div className="wiersz">
          <div className="together">
            <input className='name' type="text" name="name" id='name' onChange={(e) => setName(e.target.value)} />
            <label htmlFor="name">imię</label>
          </div>
          <div className="together">
            <input className='name' type="text" name='surname' id="surname" onChange={(e) => setSurename(e.target.value)} />
            <label htmlFor="surname">nazwisko</label>
          </div>
        </div>
        <div className="wiersz">
          <div className="together">
            <input className='name' type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="">email</label>
          </div>
          <div className="together">
            <input className='name' type="email" id='paragon' onChange={(e) => setParagon(e.target.value)} />
            <label htmlFor="">nr paragonu</label>
          </div>

          {/* ---------------------------------- */}

          <div className="together">

            <input className='name' type="text" id='phone' onChange={(e) => setPhone(e.target.value)} />
            <label htmlFor="">telefon</label>

          </div>

          {/* ---------------------------------- */}

        </div>
        <div className="wiersz textarea">
          <textarea name="answer" id="" cols="30" rows="10" onChange={(e) => setAnswer(e.target.value)}></textarea>
          <label className='' htmlFor="">twoja odpowiedź</label>
        </div>

        <div className="wiersz consent">

          <div className="consent">
            <div onClick={() => setConsent(!consent)} className={consent ? "radio click" : "radio"}>
              <img src={process.env.PUBLIC_URL + `/images/tick.svg`} alt="" />
            </div>
            <p className='labelConsent'>
              Oświadczam, że zapoznałem/am się z <span onClick={() => setOpen(true)}> Regulaminem Konkursu</span> i akceptuję wszystkie zawarte w nim warunki.
            </p>

          </div>

          <div className="consent">
            <div onClick={() => setRadio(!radio)} className={radio ? "radio click" : "radio"}>
              <img src={process.env.PUBLIC_URL + `/images/tick.svg`} alt="" />
            </div>
            <p className='labelConsent'>
              Wyrażam zgodę na przetwarzanie moich danych osobowych (imię, nazwisko, nr telefonu i adres mailowy) w związku z moim udziałem w Konkursie "Wygraj z Almette", w celu ich publikacji wraz z odpowiedzią nagrodzoną w ramach Konkursu na stronie <a href="http://wygrajzalmette.pl">wygrajzalmette.pl</a> oraz w portalach społecznościowych HOCHLAND, zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku oraz ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz.U.2018 poz. 1000).
            </p>

          </div>
        </div>
        <input onClick={handleSubmit} className={!radio || !consent ? 'submit ' : "submit active"} type="submit" value="wyślij" disabled={!radio || !consent ? true : (radio && consent ? false : true)} />
      </form>
    </>
  )
}

export default Form