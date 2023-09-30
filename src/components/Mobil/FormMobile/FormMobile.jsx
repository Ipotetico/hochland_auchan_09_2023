import React from 'react'
import './FormMobile.scss'
import InputMobile from './InputMobile/InputMobile'

const FormMobile = ({ open, setOpen, name, setName, surename, setSurename, email, setEmail, paragon, setParagon, phone, setPhone, answer, setAnswer, radio, setRadio, consent, setConsent, validPhone, setValidPhone }) => {
    return (
        <form action="" className="form_mobile">

            <InputMobile content='imię' type='text' />

            <InputMobile content='nazwisko' type='text' />

            <InputMobile content='email' type='email' />

            <InputMobile content='telefon' type='tel' />

            <InputMobile content='nr paragonu' type='text' />

            <InputMobile content='odpowiedź' type='text' textarea />

        </form>
    )
}

export default FormMobile