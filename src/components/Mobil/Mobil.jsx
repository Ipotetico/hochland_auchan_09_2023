import React from 'react'
import { useCookies } from 'react-cookie'
import FormMobile from './FormMobile/FormMobile'
import Popup from './Popup/Popup'
import Regulamin from '../Regulamin/Regulamin'
import CookieConsent from '../CookieConsent/CookieConsent'

import './Mobil.scss'


// const Mobil = ({ open, setOpen, name, setName, surename, setSurename, email, setEmail, paragon, setParagon, phone, setPhone, answer, setAnswer, radio, setRadio, consent, setConsent, validPhone, setValidPhone, handleSubmit, errors, show, setShow, capcha, setCapcha, style }) => {

//     const [cookies] = useCookies(["cookieConsent"]);

//     return (
//         <>
//             {!cookies.cookieConsent && <CookieConsent />}
//             <Regulamin open={open} setOpen={setOpen} />
//             <Popup show={show} setShow={setShow} />
//             <div className="mobil_container">

//                 <img src={process.env.PUBLIC_URL + `/images/mobil/gory_mobil.webp`} alt="" className="background gory" />

//                 <img src={process.env.PUBLIC_URL + `/images/mobil/chmury_mobil.webp`} alt="" className="background chmury" />

//                 <img src={process.env.PUBLIC_URL + `/images/mobil/headline_mobile.svg`} alt="" className="headline" />

//                 <div className="copy">
//                     <img src={process.env.PUBLIC_URL + `/images/mobil/arc_mobile.svg`} alt="" className="arc" />

//                     <div className="konkurs_mobile">
//                         <img src={process.env.PUBLIC_URL + `/images/nagroda_copy.svg`} alt="" className="nagroda" />

//                         <video className="nagroda blender" autoPlay loop muted playsInline>
//                             <source src={process.env.PUBLIC_URL + `/video/blender.mp4`} type="video/mp4" />
//                         </video>

//                         <img src={process.env.PUBLIC_URL + `/images/mobil/mechanika_mobile.svg`} alt="" className="nagroda" />

//                         <FormMobile open={open} setOpen={setOpen} name={name} setName={setName} surename={surename} setSurename={setSurename} email={email} setEmail={setEmail} paragon={paragon} setParagon={setParagon} phone={phone} setPhone={setPhone} answer={answer} setAnswer={setAnswer} radio={radio} setRadio={setRadio} consent={consent} setConsent={setConsent} validPhone={validPhone} setValidPhone={setValidPhone} handleSubmit={handleSubmit} errors={errors} capcha={capcha} setCapcha={setCapcha} style={style} />
//                     </div>

//                 </div>

//             </div>
//             <p className="copyright">

//                 © <img src={process.env.PUBLIC_URL + `/images/almette_logo_white.svg`} alt="" /> 2023  |  ALL RIGHTS REServed
//             </p>
//         </>

//     )
// }

// export default Mobil



const Mobil = ({ open, setOpen, show, setShow, errors, radio, setRadio, handleChange, handleSubmit, consent, setConsent }) => {

    const [cookies] = useCookies(["cookieConsent"]);

    return (
        <>
            {!cookies.cookieConsent && <CookieConsent />}
            <Regulamin open={open} setOpen={setOpen} />
            <Popup show={show} setShow={setShow} />
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

                        <FormMobile open={open} setOpen={setOpen} errors={errors} radio={radio} setRadio={setRadio} handleChange={handleChange} handleSubmit={handleSubmit} consent={consent} setConsent={setConsent} />
                    </div>

                </div>

            </div>
            <p className="copyright">

                © <img src={process.env.PUBLIC_URL + `/images/almette_logo_white.svg`} alt="" /> 2023  |  ALL RIGHTS REServed
            </p>
        </>

    )
}

export default Mobil