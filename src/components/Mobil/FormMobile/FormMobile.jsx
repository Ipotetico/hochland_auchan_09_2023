import React from 'react'
import InputMobile from './InputMobile/InputMobile'
import ConsentMobile from '../ConsentMobile/ConsentMobile'

import './FormMobile.scss'
import Capcha from '../../Capcha/Capcha'

// const FormMobile = ({ open, setOpen, name, setName, surename, setSurename, email, setEmail, paragon, setParagon, phone, setPhone, answer, setAnswer, radio, setRadio, consent, setConsent, validPhone, setValidPhone, handleSubmit, errors, setErrors, color, capcha, setCapcha, style }) => {




//     return (
//         <>
//             <form action="" className="form_mobile">

//                 <InputMobile content='imię' type='text' action={setName} capitalize value={name} />

//                 <InputMobile content='nazwisko' type='text' action={setSurename} value={surename} capitalize />

//                 <InputMobile content='email' type='email' action={setEmail} value={email} />

//                 <InputMobile content='telefon' type='tel' action={setPhone} value={phone} />

//                 <InputMobile content='nr paragonu' type='text' action={setParagon} value={paragon} />

//                 <InputMobile content='odpowiedź' type='text' textarea action={setAnswer} value={answer} />

//                 <Capcha style={style} />

//                 <ConsentMobile open={open} setOpen={setOpen} radio={radio} setRadio={setRadio} copy={<div onClick={() => setOpen(true)}><p>Oświadczam, że zapoznałem/am się z <span>Regulaminem Konkursu</span> i akceptuję wszystkie zawarte w nim warunki.</p></div>} />

//                 <ConsentMobile open={open} setOpen={setOpen} radio={consent} setRadio={setConsent} copy={<p>Wyrażam zgodę na przetwarzanie moich danych osobowych (imię, nazwisko, nr telefonu i adres mailowy) w związku z moim udziałem w Konkursie "Wygraj z Almette", w celu ich publikacji wraz z odpowiedzią nagrodzoną w ramach Konkursu na stronie <span>wygrajzalmette.pl</span>  oraz w portalach społecznościowych HOCHLAND, zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku oraz ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz.U.2018 poz. 1000).</p>} />


//                 <div onClick={handleSubmit} className="submit">
//                     {errors.map((error, i) => (
//                         <span style={{ color: color === 'green' ? "green" : 'red' }} key={i}>{error}</span>
//                     ))}
//                     <button className="submit">wyślij zgłoszenie</button>

//                 </div>
//             </form >

//         </>
//     )
// }

// export default FormMobile


const FormMobile = ({ open, setOpen, capitalize, textarea, style, radio, setRadio, consent, setConsent, handleSubmit, errors, color, show, setShow, handleChange }) => {




    return (
        <>
            <form action="" className="form_mobile">

                <InputMobile name='imię' type='text' capitalize handleChange={handleChange} />

                <InputMobile name='nazwisko' type='text' capitalize handleChange={handleChange} />

                <InputMobile name='email' type='email' handleChange={handleChange} />

                <InputMobile name='telefon' type='tel' handleChange={handleChange} />

                <InputMobile name='paragon' type='text' handleChange={handleChange} />

                <InputMobile name='odpowiedź' type='text' textarea handleChange={handleChange} />

                <Capcha style={style} />

                <ConsentMobile open={open} setOpen={setOpen} radio={radio} setRadio={setRadio} copy={<div onClick={() => setOpen(true)}><p>Oświadczam, że zapoznałem/am się z <span>Regulaminem Konkursu</span> i akceptuję wszystkie zawarte w nim warunki.</p></div>} />

                <ConsentMobile open={open} setOpen={setOpen} radio={consent} setRadio={setConsent} copy={<p>Wyrażam zgodę na przetwarzanie moich danych osobowych (imię, nazwisko, nr telefonu i adres mailowy) w związku z moim udziałem w Konkursie "Wygraj z Almette", w celu ich publikacji wraz z odpowiedzią nagrodzoną w ramach Konkursu na stronie <span>wygrajzalmette.pl</span>  oraz w portalach społecznościowych HOCHLAND, zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 roku oraz ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz.U.2018 poz. 1000).</p>} />


                <div onClick={handleSubmit} className="submit">
                    {errors.map((error, i) => (
                        <span style={{ color: color === 'green' ? "green" : 'red' }} key={i}>{error}</span>
                    ))}
                    <button className="submit">wyślij zgłoszenie</button>

                </div>
            </form >

        </>
    )
}

export default FormMobile